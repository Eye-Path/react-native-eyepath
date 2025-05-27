//최근목적지 목록이 아닌 검색 중 목적지 목록 섹션으로 변경/사용하였습니다.

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const RecentDestination = ({ keyword,onSelect }) => {
  const [destinations, setDestinations] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    if (!keyword) {
      setDestinations([]); // 키워드 없으면 빈 배열
      return;
    }

    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          'https://apis.openapi.sk.com/tmap/pois',
          {
            params: {
              version: 1,
              searchKeyword: keyword,
              resCoordType: 'WGS84GEO',
              reqCoordType: 'WGS84GEO',
              centerLon: 127.02758,
              centerLat: 37.49794,
              count: 5,
            },
            headers: {
              appKey: 'OjCMpSA1xX1U1j0OSGb7SjbWT8F13RI18ZVR17z2',
            },
          }
        );

        const pois = response.data.searchPoiInfo.pois.poi || [];
        // name만 뽑아 배열로 변환
        const simpleList = pois.map((item) => {
          // 새 주소가 없으면, newAddressList.newAddress.fullAddress로 확인
          const newAddr = item.newAddressList?.newAddress?.fullAddress;
        
          // 그래도 없으면, 구주소 조합 시도
          const oldAddr = item.frontAddr
            || (item.upperAddrName + " " + item.middleAddrName + " " + item.lowerAddrName + " " + item.detailAddrName).trim();
        
          return {
            name: item.name,
            address: newAddr || oldAddr || '주소 정보 없음',
            latitude: item.frontLat || item.noorLat,  // API 따라 다름
            longitude: item.frontLon || item.noorLon,
          };
        });
        
        setDestinations(simpleList);
      } catch (err) {
        console.error('검색 오류:', err);
        setDestinations([]);
      }
    };

    fetchDestinations();
  }, [keyword]);

  return (
    <View style={styles.container}>
      <FlatList
        data={destinations}
        keyExtractor={(item, index) => item.name + index} // name 중복 시 index 추가
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.destinationButton}
            onPress={() => onSelect(item)} // item: {name, address}
            //onPress={() => navigation.navigate('SearchPage_2', { keyword: item.name })}
          >
            <Image
              source={require('../../../assets/public/components/RecentDestinationSection/lens.png')}
              style={styles.icon}
            />
            <Text style={styles.destinationText}>{item.name}</Text>
          </TouchableOpacity>
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
  destinationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
});
