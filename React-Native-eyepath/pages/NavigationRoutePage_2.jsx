import * as React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import InfoBox from '../components/NavigationRoutePage_2/InfoBox/InfoBox';
import BottomSection from '../components/NavigationRoutePage_2/BottomSection/BottomSection';
import MicSection from '../components/NavigationRoutePage_2/MicSection/MicSection';
import TmapPage from '../components/NavigationPage/TmapPage';

const NavigationRoutePage_2 = () => {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <TmapPage />
      </View>

      <ScrollView contentContainerStyle={styles.contentOverlay}>
        <View>
          <InfoBox />
          <MicSection />
        </View>
        <BottomSection />
      </ScrollView>
    </View>
  );
};

export default NavigationRoutePage_2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentOverlay: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 50,
  },
});
