import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import RNFS from 'react-native-fs';

const MAX_IMAGES = 10; // 최대 이미지 개수

export default function CameraScreen({setPhotoPath}) {
  const [permission, setPermission] = useState('not-determined'); // 'authorized' | 'denied' …
  const [device, setDevice] = useState(null); // 후면 카메라 객체
  const [error, setError] = useState(null); // 예외 메시지용

  const cameraRef = useRef(null); // 카메라 참조

  const captureTimer = useRef(null); // 캡처 타이머

  const [photoPathState, setPhotoPathState] = useState(null);

  const checkTimer = useRef(null);

  // 오래된 이미지 삭제 함수
  const cleanupOldImages = async () => {
    const files = await RNFS.readDir(RNFS.CachesDirectoryPath);
    const imageFiles = files
      .filter(file => file.name.startsWith('capture_'))
      .sort((a, b) => a.mtime - b.mtime); // 오래된 순

    if (imageFiles.length > MAX_IMAGES) {
      const filesToDelete = imageFiles.slice(0, imageFiles.length - MAX_IMAGES);
      console.log('사진 삭제함: ', filesToDelete);
      for (const file of filesToDelete) {
        await RNFS.unlink(file.path);
      }
    }
  };

  /* ① 권한 + 장치 한 번에 준비 */
  useEffect(() => {
    /* 1. 권한 요청 */
    const askAndCheck = async () => {
      const isAuthorized = status =>
        status === 'authorized' || status === 'granted';

      const status = await Camera.getCameraPermissionStatus();
      if (!isAuthorized(status)) {
        const newStatus = await Camera.requestCameraPermission();
        setPermission(newStatus);
        if (newStatus !== 'authorized') return; // 권한 거절 시 중단
      } else {
        setPermission('authorized');
      }

      // 권한이 허용되었을 때만 카메라 장치 탐색
      const devs = await Camera.getAvailableCameraDevices();
      const backa = devs.find(c => c.position === 'back');
      setDevice(backa ?? null);
    };
    askAndCheck();

    checkTimer.current = setInterval(askAndCheck, 1000);
    return () => clearInterval(checkTimer.current);
  }, []);

  //1초마다 사진을 찍음
  useEffect(() => {
    if (permission === 'authorized' && device && cameraRef.current) {
      //권한, 디바이스, 카메라 프레임 중 하나라도 오류면 넘어감
      captureTimer.current = setInterval(async () => {
        //카메라 캡쳐 타이머를 설정
        try {
          const photo = await cameraRef.current.takePhoto({
            // 사진을 촬영
            flash: 'off',
            qualityPrioritization: 'speed',
            skipMetadata: true,
          });

          if (photo && photo.path) {
            const timestamp = Date.now();
            const destPath = `${RNFS.CachesDirectoryPath}/capture_${timestamp}.jpg`;

            await RNFS.copyFile(photo.path, destPath);
            await cleanupOldImages();
            console.log('✅ 복사 완료:', destPath);
            console.log('📸 촬영됨: 원본 경로 →', photo.path);

            setPhotoPathState(destPath);
            setPhotoPath(destPath);
          } else {
            console.warn('❌ 캡쳐 실패: 경로 없음');
          }
        } catch (err) {
          //예외 처리
          console.warn('사진 캡쳐 안됨', err);
        }
      }, 100000); //1초
    }

    return () => clearInterval(captureTimer.current); //타이머 반납
  }, [permission, device, setPhotoPath]);

  /* ② UI 분기 */
  if (error)
    return (
      <View style={styles.center}>
        <Text style={styles.text}>❌ {error}</Text>
      </View>
    );

  if (permission !== 'authorized')
    return (
      <View style={styles.center}>
        <Text style={styles.text}>📋 카메라 권한을 허용해주세요</Text>
        <Text style={styles.textSmall}>설정 → 앱 → 카메라 허용</Text>
        <Text style={{color: 'yellow', textAlign: 'center', fontSize: 12}}>
          perm: {permission} | device: {device ? 'yes' : 'no'}
        </Text>
        <Text style={{color: 'yellow'}}>
          Permission: {permission} | Device: {device ? 'yes' : 'no'}
        </Text>
      </View>
    );

  if (!device)
    return (
      <View style={styles.center}>
        <Text style={styles.text}>📷 후면 카메라 장치를 찾는 중…</Text>
      </View>
    );

  /* ③ 실제 미리보기 */
  return (
    <View style={styles.center}>
      <View style={styles.cameraBox}>
        <Camera
          ref={cameraRef}
          device={device}
          isActive
          style={styles.camera}
          photo={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'left',
    flex: 1,
  },

  camera: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: 100,
    height: 100,
  },

  cameraBox: {
    marginTop: 8,
    width: 100,
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#888',
  },
});
