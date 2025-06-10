import * as React from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useState, useEffect} from 'react';

import InfoBox from '../components/NavigationRoutePage_2/InfoBox/InfoBox';
import BottomSection from '../components/NavigationRoutePage_2/BottomSection/BottomSection';
import MicSection from '../components/NavigationRoutePage_2/MicSection/MicSection';
import CameraScreen from '../components/NavigationRoutePage_2/CameraScreen/CameraScreen';
import Camera from '../components/NavigationRoutePage_2/CameraScreen/Camera';

const queryClient = new QueryClient();

const NavigationRoutePage_2 = () => {
  const [photoPath, setPhotoPath] = useState(null);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackground(true);
    }, 1500); // 4초 후 배경 등장

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <View style={{flex: 1}}>
        {/* 배경 이미지 */}
        {showBackground && (
          <Image
            source={require('../assets/public/components/NavigationRoute/snap2.png')}
            style={styles.backgroundImage}
            resizeMode="contain"
          />
        )}
        {/* Foreground content */}
        <ScrollView contentContainerStyle={styles.background}>
          <View>
            <InfoBox />
            <MicSection />
          </View>
          <CameraScreen setPhotoPath={setPhotoPath} />
          <Camera photoPath={photoPath} />
          <BottomSection />
        </ScrollView>
      </View>
    </QueryClientProvider>
  );
};

export default NavigationRoutePage_2;

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingTop: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 50,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
