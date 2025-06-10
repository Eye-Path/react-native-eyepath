import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const BottomSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.handle} />
      <View style={styles.topRow}>
        <View>
          <Text style={styles.timeText}>
            오후 <Text style={styles.bold}>10:19</Text>
          </Text>
          <Text style={styles.label}>도착 예정 시간</Text>
        </View>
        <View>
          <Text style={styles.bold}>720m</Text>
          <Text style={styles.label}>남은 거리</Text>
        </View>
        <View />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MainPage')}>
        <Text style={styles.buttonText}>안내 종료</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '00px',
    padding: 20,
    borderRadius: 20,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
  },

  panel: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: -2},
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
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timeText: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  label: {
    fontSize: 12,
  },
  button: {
    backgroundColor: '#9090FF',
    borderRadius: 15,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BottomSection;
