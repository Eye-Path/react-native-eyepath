import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const MicSection = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconMic}>
        <Image
          source={require('../../../assets/public/components/TextInputSection/microphone.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MicSection;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    right: 0,
  },
  icon: {
    display: 'flex',
    width: 30,
    height: 30,
  },
  iconMic: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
});
