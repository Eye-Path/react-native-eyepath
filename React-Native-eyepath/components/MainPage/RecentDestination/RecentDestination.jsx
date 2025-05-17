import {View, Text, StyleSheet} from 'react-native';
import {useState} from 'react';

const RecentDestination = () => {
  const recentDestinationInformation = [
    {
      destination: '경기대학교 수원캠퍼스 후문(동문)',
      address: '경기 수원시 영통구 광교산로 154-42',
      distance: '32m',
    },
    {
      destination: '투썸플레이스 시흥 은계점',
      address: '경시 시흥시 은계번영길 21',
      distance: '1.2km',
    },
    {
      destination: '안양대학교 안양캠퍼스',
      address: '경시 안양시 만안구 삼덕로 37',
      distance: '2.5km',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.recentDestinationText}>최근 목적지</Text>
      <View style={styles.recentContainer}>
        {recentDestinationInformation.map((item, index) => (
          <View key={index}>
            <Text style={styles.informationDestination}>
              {index + 1}. {item.destination}
            </Text>
            <Text style={styles.informationAddress}>{item.address}</Text>
            <Text style={styles.informationDistance}>{item.distance}</Text>
            <View style={styles.line}></View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RecentDestination;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 32,
  },
  recentDestinationText: {
    display: 'flex',
    paddingLeft: 121,
    fontFamily: 'Roboto-bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  recentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 46,
  },

  informationDestination: {
    display: 'flex',
    fontFamily: 'Roboto-bold',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },

  informationAddress: {
    display: 'flex',
    fontFamily: 'Roboto-bold',
    fontSize: 14,
    fontWeight: 'medium',
    color: '#7C7C7C',
  },

  informationDistance: {
    display: 'flex',
    fontFamily: 'Roboto-bold',
    fontSize: 14,
    fontWeight: 'medium',
    color: '#7C7C7C',
  },
  line: {
    display: 'flex',
    width: 338,
    height: 1,
    backgroundColor: '#000000',
    border: '1px solid #000000',
    marginBottom: 23,
    marginTop: 12,
  },
});
