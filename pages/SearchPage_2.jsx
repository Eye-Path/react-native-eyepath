import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';

import TextInputSection from '../components/SearchPage_2/TextInputSection/TextInputSection';
import PlaySection from '../components/SearchPage_2/PlaySection/PlaySection';
import TmapPage from '../components/NavigationPage/TmapPage';

const { height, width } = Dimensions.get('window');

const SearchPage_2 = ({ route }) => {
  const place = route?.params?.place || { name: '', address: '' };
  const [keyword, setKeyword] = useState(place.name || '');
  const [selectedDestination, setSelectedDestination] = useState(null); // ⬅️ 추가

  return (
    <View style={styles.pageContainer}>
      {/* 배경 티맵 */}
      <View style={styles.mapContainer}>
        <TmapPage destination={selectedDestination} /> {/* ⬅️ 전달 */}
      </View>

      {/* UI */}
      <View style={styles.uiContainer}>
        <TextInputSection
          keyword={keyword}
          setKeyword={setKeyword}
          onSelect={setSelectedDestination} // ⬅️ 선택 이벤트 넘김
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
    backgroundColor: '#f8f8f8',
  },

  // 티맵을 화면 전체 배경으로 고정
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    zIndex: 0,
  },

  // UI는 위에 쌓임
  uiContainer: {
    flex: 1,
    zIndex: 1,
    paddingTop: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 100,
  },

  scrollContainer: {
    flex: 1,
    paddingBottom: height * 0.5, // 하단 바텀시트와 겹치지 않도록
  },
});

export default SearchPage_2;
