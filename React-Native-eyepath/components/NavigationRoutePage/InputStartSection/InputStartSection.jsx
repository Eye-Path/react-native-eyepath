import React, { useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const TextInputSection = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState('위치 불러오는 중...');

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: '위치 권한 요청',
              message: '현재 위치를 사용하려면 위치 권한이 필요합니다.',
              buttonNeutral: '나중에',
              buttonNegative: '거부',
              buttonPositive: '허용',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getCurrentLocation();
          } else {
            setLocation('권한 거부됨');
          }
        } catch (err) {
          console.warn(err);
          setLocation('권한 요청 실패');
        }
      } else {
        getCurrentLocation();
      }
    };

    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
    
          console.log(`현재 위치: (${latitude}, ${longitude}), 정확도: ${accuracy}m`);
    
          // 정확도가 30m 이내일 때만 위치 표시
          if (accuracy && accuracy <= 30) {
            setLocation(`내 위치 (${latitude.toFixed(6)}, ${longitude.toFixed(6)})`);
          } else {
            setLocation(`정확하지 않은 위치 (${latitude.toFixed(6)}, ${longitude.toFixed(6)})`);
            // 필요시 재요청할 수도 있음
            // setTimeout(() => getCurrentLocation(), 3000);
          }
        },
        (error) => {
          console.warn('위치 에러:', error);
          setLocation('위치 정보를 가져올 수 없습니다.');
        },
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 10000,
          forceRequestLocation: true,   // 최신 위치 강제로 요청
          showLocationDialog: true,     // 위치 설정 꺼져있으면 다이얼로그 띄움
        }
      );
    };
    
    

    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.textInputWrapper}
        onPress={() => navigation.navigate('SearchPage')}
      >
        <TextInput
          placeholder="출발지가 들어가야함."
          placeholderTextColor="#a9a9a9"
          style={styles.input}
          editable={false}
          pointerEvents="none"
          value={location}
        />
        <TouchableOpacity style={styles.iconMic}>
          <Image
            source={require('../../../assets/public/components/TextInputSection/microphone.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default TextInputSection;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textInputWrapper: {
    marginTop: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 57,
    width: '100%',
    borderWidth: 1,
    borderColor: '#9090FF',
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    // boxShadow는 React Native에서 동작 안하니 제거
    // 대신 elevation (안드로이드)로 그림자 가능
    elevation: 4,
  },
  input: {
    paddingLeft: 20,
    flex: 1,
  },

  icon: {
    width: 24,
    height: 24,
  },

  iconMic: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
});
