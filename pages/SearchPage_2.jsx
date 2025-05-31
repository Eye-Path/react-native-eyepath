import React from 'react';
import {View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import TextInputSection from '../components/SearchPage_2/TextInputSection/TextInputSection';
import PlaySection from '../components/SearchPage_2/PlaySection/PlaySection';

const {height} = Dimensions.get('window');

const SearchPage_2 = ({route}) => {
  const keyword = route?.params?.keyword || '';

  return (
    <View style={styles.pageContainer}>
      {/* 상단 TextInput */}
      <TextInputSection keyword={keyword} />

      {/* 스크롤 가능한 컨텐츠 */}
      <ScrollView style={styles.scrollContainer}>
        {/* 다른 컨텐츠를 여기에 추가 */}
      </ScrollView>

      {/* 하단 Destination Bottom Sheet */}
      <PlaySection keyword={keyword} />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 100,
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: height * 0.5, // DestinationBottomSheet와 겹치지 않도록 아래 패딩 추가
  },
});

export default SearchPage_2;
