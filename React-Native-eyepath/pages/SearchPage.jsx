import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import PresetDestination from '../components/SearchPage/PresetDestination/PresetDestination';
import RecentDestination from '../components/SearchPage/RecentDestination/RecentDestination';
import TextInputSection from '../components/SearchPage/TextInputSection/TextInputSection';

const { height, width } = Dimensions.get('window');

const SearchPage = ({ route }) => {

  const keyword = route?.params?.keyword || '';

  return (
    <View style={styles.container}>
        <TextInputSection keyword={keyword}/>
        <PresetDestination/>
        <RecentDestination/>
    </View>
  );
};


export default SearchPage;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F8F7FF',
    paddingTop: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 100,
  },
});