import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const StartCard = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>AI 음성 길찾기</Text>
          <Text style={styles.cardMainLine}>걷는 모든 길에,</Text>
          <Text style={styles.cardMainLine}>
            당신만을 위한 안내가 따라갑니다.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigationPage')}
          style={styles.button}>
          <Text style={styles.buttonText}>시작하기</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default StartCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 241,
    borderRadius: 20,
    marginTop: 45,
    backgroundColor: '#9090FF',
    overflow: 'hidden',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: '#9090FF',
  },
  cardTitle: {
    fontFamily: 'Roboto-bold',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingLeft: 14,
    paddingTop: 21,
    paddingBottom: 9,
  },
  cardMainLine: {
    fontFamily: 'Roboto-bold',
    fontSize: 20,
    paddingLeft: 14,
    paddingTop: 6,
    fontWeight: 'bold',
    color: '#000000',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    width: 250,
    height: 80,
    borderRadius: 20,
    marginBottom: 30,
    marginLeft: 40,
  },

  buttonText: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 35,
  },
});
