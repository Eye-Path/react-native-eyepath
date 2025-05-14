import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import PresetDestination from '../components/SearchPage/PresetDestination/PresetDestination';
import RecentDestination from '../components/SearchPage/RecentDestination/RecentDestination';
import TextInputSection from '../components/SearchPage/TextInputSection/TextInputSection';

const { height, width } = Dimensions.get('window');

const SearchPage = () => {
  return (
    <View style={styles.container}>
        <TextInputSection/>
        <PresetDestination/>
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