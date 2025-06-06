import * as React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useState} from 'react';

import InfoBox from '../components/NavigationRoutePage_2/InfoBox/InfoBox';
import BottomSection from '../components/NavigationRoutePage_2/BottomSection/BottomSection';
import MicSection from '../components/NavigationRoutePage_2/MicSection/MicSection';
import CameraScreen from '../components/NavigationRoutePage_2/CameraScreen/CameraScreen';
import Camera from '../components/NavigationRoutePage_2/CameraScreen/Camera';
import TmapPage from '../components/NavigationPage/TmapPage';

const queryClient = new QueryClient();

const NavigationRoutePage_2 = () => {
  const [photoPath, setPhotoPath] = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <View style={StyleSheet.absoluteFill}>
        <TmapPage />
      </View>
      <ScrollView contentContainerStyle={styles.background}>
        <View>
          <InfoBox />
          <MicSection />
        </View>
        <CameraScreen setPhotoPath={setPhotoPath} />
        <Camera photoPath={photoPath} />
        <BottomSection />
      </ScrollView>
    </QueryClientProvider>
  );
};

export default NavigationRoutePage_2;

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#F8F7FF',
    paddingTop: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 50,
  },
});
