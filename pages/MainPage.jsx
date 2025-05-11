import * as React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import InputStartSection from '../components/NavigationPage/InputStartSection/InputStartSection';
import InputFinishSection from '../components/NavigationPage/InputFinishSection/InputFinishSection';
import RouteCard from '../components/NavigationPage/RouteCard/RouteCard';
import StartButton from '../components/NavigationPage/StartButton/StartButton';

const MainPage = () => {
  return (
    <ScrollView style={styles.background}>
      <InputStartSection />
      <InputFinishSection />
      <RouteCard />
      <StartButton />
    </ScrollView>
  );
};

export default MainPage;

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
