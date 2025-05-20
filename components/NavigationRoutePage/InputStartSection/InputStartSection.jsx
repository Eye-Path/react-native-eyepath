import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const TextInputSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.textInputWrapper}
        onPress={() => navigation.navigate('SearchPage')}>
        <TextInput /* input */
          placeholder="출발지가 들어가야함."
          placeholderTextColor="#a9a9a9"
          style={styles.input}
          editable={false} // 텍스트 입력을 막음
          pointerEvents="none" // 클릭만 가능하게 만들기
        />
        {/* 마이크 아이콘 */}
        <TouchableOpacity style={styles.iconMic}>
          <Image
            source={require('../../../assets/public/components/TextInputSection/microphone.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default TextInputSection;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textInputWrapper: {
    marginTop: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 57,
    width: '100%',
    borderWidth: 1,
    borderColor: '#9090FF',
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.25)',
  },
  input: {
    paddingLeft: 20,
  },

  icon: {
    display: 'flex',
    width: 24,
    height: 24,
  },

  iconMic: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
});
