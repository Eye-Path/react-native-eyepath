import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import TextInputSection from '../components/SearchPage_2/TextInputSection/TextInputSection';
import PlaySection from '../components/SearchPage_2/PlaySection/PlaySection';

const { height } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.pageContainer}>
      {/* 상단 TextInput */}
      <TextInputSection />
      
      {/* 스크롤 가능한 컨텐츠 */}
      <ScrollView style={styles.scrollContainer}>
        {/* 다른 컨텐츠를 여기에 추가 */}
      </ScrollView>

      {/* 하단 Destination Bottom Sheet */}
      <PlaySection />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: height * 0.5, // DestinationBottomSheet와 겹치지 않도록 아래 패딩 추가
  },
});

export default App;
