import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import NavigationSection from '../components/SearchPage/NavigationSection/NavigationSection';
import RecentDestination from '../components/SearchPage/RecentDestination/RecentDestination';
import TextInputSection from '../components/SearchPage/TextInputSection/TextInputSection';

const { height, width } = Dimensions.get('window');

const MainPage = () => {
  return (
    <View style={styles.container}>
        <TextInputSection/>
        <NavigationSection/>
        <RecentDestination/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.03,
    backgroundColor: '#fff', 
  },
});

export default SearchPage;
