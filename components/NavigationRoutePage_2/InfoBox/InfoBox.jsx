import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const InfoBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstBox}>
        <Image
          source={require('../../../assets/public/components/NavigationRouteSection/goStraight.png')}
          style={styles.arrowIcon}
        />
        <View>
          <Text style={styles.distance}>100m</Text>
          <Text style={styles.label}> 8강의동 입구까지</Text>
        </View>
      </View>

      <View style={styles.secondBox}>
        <Image
          source={require('../../../assets/public/components/NavigationRouteSection/turnRight.png')} // 이미지 경로에 맞게 변경
          style={styles.semiArrowIcon}
        />
        <Text style={styles.smallDistance}>30m</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstBox: {
    backgroundColor: '#D9D6FB',
    width: 220,
    height: 120,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  secondBox: {
    backgroundColor: '#8C86FF',
    width: 140,
    height: 70,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  arrowIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: 'contain',
  },
  semiArrowIcon: {
    width: 30,
    height: 30,
    marginRight: 20,
    resizeMode: 'contain',
  },
  icon: {fontSize: 20, marginRight: 8},
  distance: {fontSize: 40, fontWeight: 'bold'},
  label: {fontSize: 15},
  smallDistance: {fontSize: 20, fontWeight: 'bold'},
});

export default InfoBox;
