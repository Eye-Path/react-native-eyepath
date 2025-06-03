
import React from 'react';
import { View, StyleSheet } from 'react-native';

import TextInputSection from '../components/NavigationPage/TextInputSection/TextInputSection';
import NavigationSection from '../components/MainPage/NavigationSection/NavigationSection';
import RecentDestination from '../components/MainPage/RecentDestination/RecentDestination';
import TmapPage from '../components/NavigationPage/TmapPage';

const NavigationPage = () => {
  return (
    <View style={styles.container}>

      {/* 지도 배경: 항상 터치 가능 */}
      <View style={styles.mapContainer}>
        <TmapPage />
      </View>

      {/* UI 겹치기: 투명 부분 터치 투과, 자식 컴포넌트는 터치 가능 */}
      <View style={styles.overlay} pointerEvents="box-none">
        <TextInputSection />
        <NavigationSection />
      </View>

      {/* 최근 목적지: 완전 UI 영역, 터치 가능 */}
      <View style={styles.recentDes} pointerEvents="auto">
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

  mapContainer: {
    ...StyleSheet.absoluteFillObject, // 화면 전체 덮기
    zIndex: 0,
  },

  overlay: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 100,
    zIndex: 1,
  },

  recentDes: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 'auto',
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
});
