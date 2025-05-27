
/*

//지도만 띄우는 코드

import React from 'react';
import { WebView } from 'react-native-webview';

const TmapPage = () => {
  return (
    <WebView
      source={{ uri: 'https://whimsical-platypus-f817ff.netlify.app/' }}
      style={{ flex: 1 }}
      javaScriptEnabled={true}                 // 자바스크립트 허용
      domStorageEnabled={true}                 // DOM 저장소 허용 (웹 저장소)
      originWhitelist={['*']}                  // 모든 도메인 허용 (CORS 문제 예방)
      mixedContentMode="always"                // http 컨텐츠도 허용 (HTTPS 페이지 내 http 요청 문제 해결)
      startInLoadingState={true}               // 로딩 중 화면 표시
    />
  );
};

export default TmapPage;
*/

/*

휴대폰에서 GPS 사용할 때 코드

import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

const TmapPage = () => {
  useEffect(() => {
    async function requestLocationPermission() {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          ]);
          if (
            granted['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.ACCESS_COARSE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
          ) {
            console.log('Location permissions granted');
          } else {
            Alert.alert('권한 필요', '위치 권한이 필요합니다.');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    }

    requestLocationPermission();
  }, []);

  return (
    <WebView
      source={{ uri: 'https://네틀리파이주소' }}
      style={{ flex: 1 }}
      originWhitelist={['*']}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      mixedContentMode="always"
    />
  );
};

export default TmapPage;
*/

///*

//컴퓨터 테스트용 코드

import React, { useEffect, useRef } from 'react';
import { WebView } from 'react-native-webview';

const TmapPage = ({ destination }) => {
  const webviewRef = useRef(null);

  useEffect(() => {
    if (destination && webviewRef.current) {
      const message = JSON.stringify({
        action: 'moveToDestination',
        payload: {
          lat: destination.latitude,
          lon: destination.longitude,
        },
      });

      webviewRef.current.postMessage(message);
    }
  }, [destination]);

  return (
    <WebView
      ref={webviewRef}
      source={{ uri: 'https://effulgent-boba-3146bc.netlify.app/' }}
      originWhitelist={['*']}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
};

export default TmapPage;




//*/
/*

//휴대폰 GPS용 코드

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { WebView } from 'react-native-webview';

const TmapPage = () => {
  const [location, setLocation] = useState({
    latitude: 37.5665,
    longitude: 126.9780,
  });

  useEffect(() => {
    const requestPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission denied');
          return;
        }
      }

      const watchId = Geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        error => console.log(error),
        { enableHighAccuracy: true, distanceFilter: 10, interval: 5000, fastestInterval: 2000 }
      );

      return () => Geolocation.clearWatch(watchId);
    };

    requestPermission();
  }, []);

  const INJECTED_JAVASCRIPT = `
    window.postMessage(JSON.stringify({
      latitude: ${location.latitude},
      longitude: ${location.longitude}
    }), '*');
    true;
  `;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://6828c988ba60363962fceff1--whimsical-platypus-f817ff.netlify.app/' }}
        style={{ flex: 1 }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled={true}
      />
    </View>
  );
};

export default TmapPage;

const styles = StyleSheet.create({
  container: { flex: 1 },
});

*/  