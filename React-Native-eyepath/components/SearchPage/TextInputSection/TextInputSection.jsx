import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const TextInputSection = ({ keyword, setKeyword, onSelect }) => {
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
              navigation.navigate('SearchPage_2', { keyword: inputValue });
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
    marginTop: 0,
  },
  textInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#9090FF',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3, // 안드로이드 그림자
  },
  backButton: {
    marginRight: 15,
  },
  backIcon: {
    width: 24,
    height: 24,
    transform: [{ rotate: '270deg' }],
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 0,
  },
  iconMic: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 14,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
