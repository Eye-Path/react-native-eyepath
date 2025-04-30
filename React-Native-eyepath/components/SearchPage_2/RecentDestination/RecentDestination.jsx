import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';


const recentDestinations = [
  {
    name: '경기대학교 수원캠퍼스 후문(동문)',
  },
  {
    name: '경기대학교 수원캠퍼스 후문(동문)',
  },
  {
    name: '경기대학교 수원캠퍼스 후문(동문)',
  },
  {
    name: '경기대학교 수원캠퍼스 후문(동문)',
  },
];

const RecentDestination = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={recentDestinations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            {/* 전체 클릭 버튼 (돋보기 + 텍스트) */}
            <TouchableOpacity style={styles.destinationButton} onPress={() => console.log('선택:', item.name)}>
              <Image
                source={require('../../../assets/public/components/RecentDestinationSection/lens.png')}
                style={styles.icon}
              />
              <Text style={styles.destinationText}>{item.name}</Text>
            </TouchableOpacity>

            {/* 삭제 버튼 (X) */}
            <TouchableOpacity style={styles.deleteButton} onPress={() => console.log('삭제')}>
              <Image
                source={require('../../../assets/public/components/RecentDestinationSection/close.png')}
                style={styles.deleteIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default RecentDestination;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  destinationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  destinationText: {
    fontSize: 14,
    color: '#000',
  },
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    width: 12,
    height: 12,
  },
});
