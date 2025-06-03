import React, { useState, useRef, useEffect } from 'react';
import { WebView } from 'react-native-webview';

const TmapPage = ({ destination }) => {
  const webviewRef = useRef(null);
  const [webViewReady, setWebViewReady] = useState(false); // ✅ 함수 안에 위치시킴

  useEffect(() => {
    if (destination && webViewReady && webviewRef.current) {
      const message = JSON.stringify({
        action: 'setLocation',
        lat: destination.latitude,
        lng: destination.longitude,
      });
      webviewRef.current.postMessage(message);
    }
  }, [destination, webViewReady]);

  return (
    <WebView
      ref={webviewRef}
      source={{ uri: 'https://capable-marigold-e98cdc.netlify.app/' }}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      originWhitelist={['*']}
      onMessage={(event) => {
        try {
          const data = JSON.parse(event.nativeEvent.data);
          if (data.action === 'ready') {
            setWebViewReady(true);
          }
        } catch (e) {
          console.error('Invalid WebView message:', e);
        }
      }}
    />

  );
};

export default TmapPage;
