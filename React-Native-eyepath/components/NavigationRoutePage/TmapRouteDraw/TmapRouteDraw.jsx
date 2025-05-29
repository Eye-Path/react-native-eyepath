// components/NavigationPage/TmapRoutePage.js
import React, { useState, useRef, useEffect } from 'react';
import { WebView } from 'react-native-webview';

const TmapRouteDraw = ({ route }) => {
  const { userLat, userLng, destination } = route.params;
  const webviewRef = useRef(null);
  const [webViewReady, setWebViewReady] = useState(false);

  useEffect(() => {
    if (webViewReady && destination && webviewRef.current) {
      console.log('✅ WebView Ready, sending data');

      // 사용자 위치 마커
      webviewRef.current.postMessage(JSON.stringify({
        action: 'setLocation',
        lat: userLat,
        lng: userLng,
      }));

      // 경로 그리기 요청
      webviewRef.current.postMessage(JSON.stringify({
        action: 'setRoute',
        startLat: userLat,
        startLng: userLng,
        endLat: destination.latitude,
        endLng: destination.longitude,
      }));
    } else {
      console.log('❌ Not ready yet', { webViewReady, destination });
    }
  }, [webViewReady]);

  return (
    <WebView
      ref={webviewRef}
      source={{ uri: 'https://capable-marigold-e98cdc.netlify.app/' }}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      originWhitelist={['*']}
      onMessage={(event) => {
        console.log('📩 Message from WebView:', event.nativeEvent.data);
        const data = JSON.parse(event.nativeEvent.data);
        if (data.action === 'ready') setWebViewReady(true);
      }}
    />
  );
};

export default TmapRouteDraw;
