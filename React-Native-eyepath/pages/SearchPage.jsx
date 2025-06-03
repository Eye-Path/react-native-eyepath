
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import PresetDestination from '../components/SearchPage/PresetDestination/PresetDestination';
import RecentDestination from '../components/SearchPage/RecentDestination/RecentDestination';
import TextInputSection from '../components/SearchPage/TextInputSection/TextInputSection';

const { height, width } = Dimensions.get('window');

const SearchPage = ({ route }) => {
  const initialKeyword = route?.params?.keyword || '';
  const navigation = useNavigation();
  const [keyword, setKeyword] = useState(initialKeyword);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelectPlace = (place) => {
    setSelectedPlace(place);
    navigation.navigate('SearchPage_2', { place }); // ← 이동 추가
  };

  return (
    <View style={styles.container}>
      <TextInputSection keyword={keyword} setKeyword={setKeyword} onSelect={handleSelectPlace} />
      <PresetDestination />
      <RecentDestination keyword={keyword} onSelect={handleSelectPlace} />
    </View>
  );
  
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7FF',
    paddingTop: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 100,
  },
});
