import React from 'react';
import {View, StyleSheet} from 'react-native';

import TextInputSection from '../components/NavigationPage/TextInputSection/TextInputSection';
import NavigationSection from '../components/MainPage/NavigationSection/NavigationSection';
import RecentDestination from '../components/MainPage/RecentDestination/RecentDestination';
import TmapPage from '../components/NavigationPage/TmapPage';

const NavigationPage = () => {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <TmapPage />
      </View>

      <View style={styles.background}>
        <TextInputSection />
        <NavigationSection />
      </View>

      <View style={styles.recentDes}>
        <RecentDestination />
      </View>
    </View>
  );
};

export default NavigationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    display: 'flex',
    paddingTop: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 100,
  },

  recentDes: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    boxShadow: '0px -3px 5px rgba(0, 0, 0, 0.25)',
    marginTop: 'auto',
  },
});
