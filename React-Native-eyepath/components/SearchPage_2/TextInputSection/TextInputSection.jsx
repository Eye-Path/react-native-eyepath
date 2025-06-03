
import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TextInputSection = ({ keyword, setKeyword }) => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState(keyword || '');

  useEffect(() => {
    setInputValue(keyword || '');
  }, [keyword]);

  const handleInputChange = (text) => {
    setInputValue(text);
    setKeyword(text); // 부모에게 입력값 전달
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputWrapper}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../../assets/public/components/TextInputSection/arrow.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <TextInput
          placeholder="목적지를 입력해주세요."
          placeholderTextColor="#000000"
          style={styles.input}
          value={inputValue}
          onChangeText={handleInputChange}
          onSubmitEditing={() => {
            if (inputValue.trim() !== '') {
              navigation.navigate('SearchPage', { keyword: inputValue });
            }
          }}
          autoCorrect={false}
          keyboardType="default"
          multiline={false}
        />

        <TouchableOpacity style={styles.iconMic}>
          <Image
            source={require('../../../assets/public/components/TextInputSection/microphone.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextInputSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  backButton: {
    marginLeft: 15,
  },

  backIcon: {
    width: 24,
    height: 24,
    transform: [{ rotate: '270deg' }],
  },

  textInputWrapper: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    height: 57,
    width: '100%',
    borderWidth: 1,
    borderColor: '#9090FF',
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',

    // Android 그림자
    elevation: 4,

    // iOS 그림자
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  input: {
    flex: 1,
    textAlign: 'left',
    paddingLeft: 9,
    fontSize: 18,
    color: '#000',
  },

  icon: {
    width: 24,
    height: 24,
  },

  iconMic: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
});
