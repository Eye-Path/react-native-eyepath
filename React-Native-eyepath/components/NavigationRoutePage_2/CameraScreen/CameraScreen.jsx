import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Camera} from 'react-native-vision-camera';

export default function CameraScreen() {
  const [permission, setPermission] = useState('not-determined'); // 'authorized' | 'denied' …
  const [device, setDevice] = useState(null); // 후면 카메라 객체
  const [error, setError] = useState(null); // 예외 메시지용
  const checkTimer = useRef(null);

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
        <Camera device={device} isActive style={styles.camera} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
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
