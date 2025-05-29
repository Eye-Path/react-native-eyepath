import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';

import TextInputSection from '../components/SearchPage_2/TextInputSection/TextInputSection';
import PlaySection from '../components/SearchPage_2/PlaySection/PlaySection';
import TmapPage from '../components/NavigationPage/TmapPage';

const { height, width } = Dimensions.get('window');

const SearchPage_2 = ({ route }) => {
  const place = route?.params?.place || { name: '', address: '' };
  const [keyword, setKeyword] = useState(place.name || '');
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    if (place && place.name) {
      setSelectedDestination(place);
    }
  }, [place]);

  return (
    <View style={styles.pageContainer}>

      {/* 지도 배경: 항상 터치 가능 */}
      <View style={styles.mapContainer}>
        <TmapPage destination={selectedDestination} />
      </View>

      {/* UI 겹치기: 투명 부분 터치 투과, 자식 컴포넌트는 터치 가능 */}
      <View style={styles.uiContainer} pointerEvents="box-none">
        <TextInputSection
          keyword={keyword}
          setKeyword={setKeyword}
          onSelect={setSelectedDestination}
        />
        <ScrollView style={styles.scrollContainer}></ScrollView>
        <PlaySection selectedPlace={place} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  mapContainer: {
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    left: 0,
    zIndex: 0,
  },
  uiContainer: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 100,
    zIndex: 1,
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: height * 0.5,
  },
});

export default SearchPage_2;
