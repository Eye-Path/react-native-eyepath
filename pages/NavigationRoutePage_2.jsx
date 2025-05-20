import * as React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import InfoBox from '../components/NavigationRoutePage_2/InfoBox/InfoBox';
import BottomSection from '../components/NavigationRoutePage_2/BottomSection/BottomSection';
import MicSection from '../components/NavigationRoutePage_2/MicSection/MicSection';

const NavigationRoutePage_2 = () => {
  return (
    <ScrollView contentContainerStyle={styles.background}>
      <View>
        <InfoBox />
        <MicSection />
      </View>
      <BottomSection />
    </ScrollView>
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
