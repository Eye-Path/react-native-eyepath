import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Text,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import * as React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import TmapRouteDraw from '../components/NavigationRoutePage/TmapRouteDraw/TmapRouteDraw';
import InputStartSection from '../components/NavigationRoutePage/InputStartSection/InputStartSection';
import InputFinishSection from '../components/NavigationRoutePage/InputFinishSection/InputFinishSection';
import RouteCard from '../components/NavigationRoutePage/RouteCard/RouteCard';
import StartButton from '../components/NavigationRoutePage/StartButton/StartButton';
import TmapPage from '../components/NavigationPage/TmapPage';

const NavigationRoutePage = ({route}) => {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const {keyword, latitude, longitude, address} = route.params || {};

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn('위치 권한 요청 실패', err);
        return false;
      }
    } else {
      return true;
    }
  };

  useEffect(() => {
    const fetchCurrentPositionAndRoute = async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        setErrorMsg('위치 권한이 필요합니다.');
        return;
      }

      Geolocation.getCurrentPosition(
        async position => {
          const startLat = position.coords.latitude;
          const startLng = position.coords.longitude;

          console.log('📍 출발 좌표:', startLat, startLng);
          console.log('📍 도착 좌표:', latitude, longitude);

          if (!startLat || !startLng || !latitude || !longitude) {
            setErrorMsg('출발지 또는 도착지 좌표 정보가 없습니다.');
            return;
          }

          setStartLocation({latitude: startLat, longitude: startLng});
          setEndLocation({latitude, longitude});

          try {
            const response = await axios.post(
              'https://eyepath.duckdns.org/route', // ✅ 올바른 URL
              {
                start_x: startLng.toString(),
                start_y: startLat.toString(),
                end_x: longitude.toString(),
                end_y: latitude.toString(),
                description: '경로요청',
              },
              {
                headers: {
                  'Content-Type': 'application/json', // ✅ Authorization 헤더 제거
                },
              },
            );

            const routeData = response.data.features || [];
            const coords = [];

            routeData.forEach(feature => {
              if (feature.geometry.type === 'LineString') {
                feature.geometry.coordinates.forEach(coord => {
                  coords.push({
                    longitude: coord[0],
                    latitude: coord[1],
                  });
                });
              }
            });

            setRouteCoordinates(coords);
          } catch (error) {
            console.error('❌ 경로 요청 실패:', error.message);
            if (error.response) {
              console.log('📡 서버 응답:', error.response.data);
            }
            setErrorMsg('경로를 불러오는 데 실패했습니다.');
          }
        },
        error => {
          console.warn('❌ 현재 위치를 가져오는 중 오류:', error);
          setErrorMsg('현재 위치를 가져오는 데 실패했습니다.');
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    fetchCurrentPositionAndRoute();
  }, [latitude, longitude]);

  if (errorMsg) {
    return (
      <View style={styles.centered}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <InputStartSection startLocation={startLocation} />
      <InputFinishSection
        endLocation={endLocation}
        address={address}
        keyword={keyword}
      />

      {startLocation && endLocation && (
        <TmapRouteDraw
          route={{
            params: {
              userLat: startLocation.latitude,
              userLng: startLocation.longitude,
              destination: endLocation,
            },
          }}
        />
      )}

      <RouteCard routeCoordinates={routeCoordinates} />
      <StartButton startLocation={startLocation} endLocation={endLocation} />
    </View>
  );
  // return (
  //   <View style={{flex: 1}}>
  //     <View style={StyleSheet.absoluteFill}>
  //       <TmapPage />
  //     </View>

  //     <ScrollView
  //       style={[StyleSheet.absoluteFill, styles.background]}
  //       contentContainerStyle={styles.scrollContent}>
  //       <InputStartSection />
  //       <InputFinishSection keyword={keyword} />
  //       <RouteCard />
  //       <StartButton />
  //     </ScrollView>
  //   </View>
  // );
};

export default NavigationRoutePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
  },
  webview: {
    flex: 1,
    width: '100%',
  },
});
