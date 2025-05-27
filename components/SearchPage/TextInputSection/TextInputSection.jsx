import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RecentDestination from '../RecentDestination/RecentDestination';

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
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  backButton: {
    marginRight: 15,
  },
  backIcon: {
    width: 16,
    height: 16,
    transform: [{ rotate: '270deg' }],
  },
  input: {
    flex: 1,
    fontSize: 14,
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