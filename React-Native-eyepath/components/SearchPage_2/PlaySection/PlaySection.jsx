import React, { useRef, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');
const MIN_Y = height * 0.5;
const MAX_Y = height - 40;

const PlaySection = ({ selectedPlace }) => {
  const [inputValue] = useState(selectedPlace?.name || '');
  const translateY = useRef(new Animated.Value(MIN_Y)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dy) > 10,
      onPanResponderMove: (_, gestureState) => {
        const newY = gestureState.dy + MIN_Y;
        if (newY >= MIN_Y && newY <= MAX_Y) translateY.setValue(newY);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          Animated.spring(translateY, { toValue: MAX_Y, useNativeDriver: false }).start();
        } else {
          Animated.spring(translateY, { toValue: MIN_Y, useNativeDriver: false }).start();
        }
      },
    })
  ).current;

  const navigation = useNavigation();

  return (
    <Animated.View style={[styles.container, { top: translateY }]} {...panResponder.panHandlers}>
      <View style={styles.handle} />
      <View style={styles.destinationWrapper}>
        <View style={styles.destinationTextContainer}>
          <Text style={styles.destination}>{selectedPlace.name}</Text>
        </View>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('NavigationRoutePage', { 
            keyword: inputValue,
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
            address: selectedPlace.address,
          })}
        >
          <Image
            source={require('../../../assets/public/components/PlaySection/play.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.address}>{selectedPlace.address}</Text>
    </Animated.View>
  );
};

export default PlaySection;

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
