import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import axios from 'axios';

const RecentDestination = ({ keyword, onSelect }) => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    if (!keyword) {
      setDestinations([]);
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
        const simpleList = pois.map((item) => {
          const newAddr = item.newAddressList?.newAddress?.fullAddress;
          const oldAddr = item.frontAddr
            || (item.upperAddrName + " " + item.middleAddrName + " " + item.lowerAddrName + " " + item.detailAddrName).trim();

          return {
            name: item.name,
            address: newAddr || oldAddr || '주소 정보 없음',
            latitude: item.frontLat || item.noorLat,
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
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.destinationButton}
            onPress={() => onSelect(item)}
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
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    width: 12,
    height: 12,
  },
});
