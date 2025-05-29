// components/StartButton.jsx
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const StartButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.startButton}
      onPress={() => navigation.navigate('NavigationRoutePage_2')}>
      <Text style={styles.startButtonText}>안내 시작</Text>
    </TouchableOpacity>
  );
};

export default StartButton;

const styles = StyleSheet.create({
  startButton: {
    backgroundColor: '#9090FF',
    borderRadius: 15,
    paddingVertical: 12,
    marginTop: 30,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
