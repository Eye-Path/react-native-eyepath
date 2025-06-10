import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Text,
  ImageBackground,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import InputStartSection from '../components/NavigationRoutePage/InputStartSection/InputStartSection';
import InputFinishSection from '../components/NavigationRoutePage/InputFinishSection/InputFinishSection';
import RouteCard from '../components/NavigationRoutePage/RouteCard/RouteCard';
import StartButton from '../components/NavigationRoutePage/StartButton/StartButton';

const NavigationRoutePage = ({route}) => {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showBackground, setShowBackground] = useState(false);

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
    const fetchCurrentPosition = async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        setErrorMsg('위치 권한이 필요합니다.');
        return;
      }

      Geolocation.getCurrentPosition(
        position => {
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
        },
        error => {
          console.warn('❌ 현재 위치를 가져오는 중 오류:', error);
          setErrorMsg('현재 위치를 가져오는 데 실패했습니다.');
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    fetchCurrentPosition();
  }, [latitude, longitude]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackground(true);
    }, 3000); // 4초 대기

    return () => clearTimeout(timer);
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.centered}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  return (
    <>
      {showBackground ? (
        <ImageBackground
          source={require('../assets/public/components/NavigationRoute/snap.png')}
          style={styles.background}
          resizeMode="cover">
          <View style={styles.overlay}>
            <InputStartSection startLocation={startLocation} />
            <InputFinishSection
              endLocation={endLocation}
              address={address}
              keyword={keyword}
            />
            <RouteCard routeCoordinates={routeCoordinates} />
            <StartButton startLocation={startLocation} endLocation={endLocation} />
          </View>
        </ImageBackground>
      ) : (
        <View style={styles.background}>
          <View style={styles.overlay}>
            <InputStartSection startLocation={startLocation} />
            <InputFinishSection
              endLocation={endLocation}
              address={address}
              keyword={keyword}
            />
            <RouteCard routeCoordinates={routeCoordinates} />
            <StartButton startLocation={startLocation} endLocation={endLocation} />
          </View>
        </View>
      )}
    </>
  );
};

export default NavigationRoutePage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    padding: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

