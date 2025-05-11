// components/StartButton.jsx
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const StartButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.startButton} onPress={onPress}>
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
