import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const navigationSection = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => console.log('press')}>
        <Image
          source={require('../../../assets/public/components/NavigationSection/home.png')}
          style={styles.icon}
        />
        <Text style={styles.buttonHomeText}>집</Text>
        <Text style={styles.buttonTimeText}>12분</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => console.log('press')}>
        <Image
          source={require('../../../assets/public/components/NavigationSection/building.png')}
          style={styles.icon}
        />
        <Text style={styles.buttonHomeText}>회사</Text>
        <Text style={styles.buttonTimeText}>36분</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingButton}
        onPress={() => console.log('press')}>
        <Text style={styles.buttonSettingText}>설정</Text>
      </TouchableOpacity>
    </View>
  );
};

export default navigationSection;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    width: 120,
    height: 42,
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.25)',
  },
  icon: {
    width: 24,
    height: 24,
  },
  buttonHomeText: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'Medium',
    color: '#000000',
  },
  buttonTimeText: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'Medium',
    color: '#9090FF',
  },

  settingButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 11,
    paddingBottom: 11,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.25)',
  },

  buttonSettingText: {
    fontFamily: 'Roboto-bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});
