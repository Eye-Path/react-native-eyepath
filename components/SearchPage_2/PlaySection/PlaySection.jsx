/*import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

const DestinationBottomSheet = () => {
  const translateY = useRef(new Animated.Value(Dimensions.get('window').height)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: Dimensions.get('window').height * 0.5,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { top: translateY }]}>
      <View style={styles.handle} />
      <View style={styles.destinationWrapper}>
  <View style={styles.destinationTextContainer}>
    <Text style={styles.destination}>
      경기대학교 수원캠퍼스 후문(동문)
    </Text>
  </View>
  <TouchableOpacity style={styles.navButton}>
    <Image
      source={require('../../../assets/public/components/PlaySection/play.png')}
      style={styles.navIcon}
    />
  </TouchableOpacity>
</View>

      <Text style={styles.address}>경기도 수원시 영통구 광교산로 154-42</Text>
    </Animated.View>
  );
};

export default DestinationBottomSheet;

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: height * 0.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 16,
  },
  destinationWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  destinationTextContainer: {
    flex: 1,
    marginRight: 4,
  },
  destination: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 8, 
    marginTop: 5,
    flexShrink: 1,
  },
  navButton: {
    padding: 3,
    marginLeft: 1,
    marginRight: 8,
  },
  navIcon: {
    width: 53,
    height: 43,
  },
  address: {
    fontSize: 13,
    color: '#555',
    flexShrink: 1,
    lineHeight: 20,
  },
});*/

import React, { useRef } from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const { height } = Dimensions.get('window');
const MIN_Y = height * 0.5;  // 기본 올라와있는 위치
const MAX_Y = height - 40;   // 손잡이만 보이게 내리는 위치

const PlaySection = () => {
  const translateY = useRef(new Animated.Value(MIN_Y)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dy) > 10;
      },
      onPanResponderMove: (_, gestureState) => {
        const newY = gestureState.dy + MIN_Y;
        if (newY >= MIN_Y && newY <= MAX_Y) {
          translateY.setValue(newY);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          // 아래로 슬라이드
          Animated.spring(translateY, {
            toValue: MAX_Y,
            useNativeDriver: false,
          }).start();
        } else {
          // 다시 위로
          Animated.spring(translateY, {
            toValue: MIN_Y,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View
      style={[styles.container, { top: translateY }]}
      {...panResponder.panHandlers}
    >
      <View style={styles.handle} />
      <View style={styles.destinationWrapper}>
        <View style={styles.destinationTextContainer}>
          <Text style={styles.destination}>
            경기대학교 수원캠퍼스 후문(동문)
          </Text>
        </View>
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require('../../../assets/public/components/PlaySection/play.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.address}>경기도 수원시 영통구 광교산로 154-42</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: height,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 16,
  },
  destinationWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  destinationTextContainer: {
    flex: 1,
    marginRight: 4,
  },
  destination: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    flexShrink: 1,
  },
  navButton: {
    padding: 5,
    marginTop: 10,
    marginLeft: 2,
    marginRight: 8,
  },
  navIcon: {
    width: 55,
    height: 43,
  },
  address: {
    fontSize: 13,
    color: '#555',
    flexShrink: 1,
    lineHeight: 20,
  },
});

export default PlaySection;
