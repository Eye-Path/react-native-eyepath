import * as React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import InputStartSection from '../components/NavigationRoutePage/InputStartSection/InputStartSection';
import InputFinishSection from '../components/NavigationRoutePage/InputFinishSection/InputFinishSection';
import RouteCard from '../components/NavigationRoutePage/RouteCard/RouteCard';
import StartButton from '../components/NavigationRoutePage/StartButton/StartButton';

const NavigationRoutePage = ({route}) => {
  const keyword = route?.params?.keyword || '';

  return (
    <ScrollView style={styles.background}>
      <InputStartSection />
      <InputFinishSection keyword={keyword} />
      <RouteCard />
      <StartButton />
    </ScrollView>
  );
};

export default NavigationRoutePage;

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F8F7FF',
    paddingTop: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 100,
  },
});
