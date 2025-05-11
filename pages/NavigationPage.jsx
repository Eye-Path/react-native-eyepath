import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import TextInputSet from '../components/NavigationPage/TextInputSet/TextInputSet';
import RouteCardSet from '../components/NavigationPage/RouteCardSet/RouteCardSet';
import StartButton from '../components/NavigationPage/StartButton/StartButton';

const NavigationPage = () => {
  return (
    <ScrollView style={styles.background}>
      <TextInputSet />
      <RouteCardSet />
      <StartButton />
    </ScrollView>
  );
};

export default NavigationPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F7F5FD',
    paddingTop: 50,
    paddingHorizontal: 32,
    paddingBottom: 100,
  },
});
