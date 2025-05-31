import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const MainTitle = () => {
  return (
    <View>
      <View style={styles.Banner}>
        <Text>가벼운 발걸음</Text>
        <Text style={styles.logoName}> eyePath</Text>
      </View>
      <Text style={styles.eyepathdescription}>보기 쉬운 도보 내비게이션</Text>
      <Text style={styles.eyepathdescription_2}>지금 바로 걸어 볼까요?</Text>
    </View>
  );
};

export default MainTitle;

const styles = StyleSheet.create({
  Banner: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F8F7FF',
    fontSize: 16,
    fontWeight: 'medium',
    textAlign: 'left',
    marginTop: 32,
    fontFamily: 'Roboto',
  },

  logoName: {
    fontFamily: 'Roboto-bold',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },

  eyepathdescription: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'medium',
    color: '#000000',
    marginTop: 5,
  },

  eyepathdescription_2: {
    fontFamily: 'Roboto-bold',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 18,
  },
});
