import * as React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import InputStartSection from '../components/NavigationRoutePage/InputStartSection/InputStartSection';
import InputFinishSection from '../components/NavigationRoutePage/InputFinishSection/InputFinishSection';
import RouteCard from '../components/NavigationRoutePage/RouteCard/RouteCard';
import StartButton from '../components/NavigationRoutePage/StartButton/StartButton';
import TmapPage from '../components/NavigationPage/TmapPage';

const NavigationRoutePage = ({route}) => {
  const keyword = route?.params?.keyword || '';

  return (
    <View style={styles.container}>
      {' '}
      <View style={StyleSheet.absoluteFill}>
        <TmapPage />
      </View>
      <ScrollView style={styles.contentOverlay}>
        <InputStartSection />
        <InputFinishSection keyword={keyword} />
        <RouteCard />
        <StartButton />
      </ScrollView>
    </View>
  );
};

export default NavigationRoutePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentOverlay: {
    backgroundColor: 'transparent',
    flex: 1,
    paddingTop: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 100,
  },
});
