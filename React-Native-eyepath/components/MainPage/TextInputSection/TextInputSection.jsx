import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const TextInputSection = ({keyword}) => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState(keyword);

  return (
    <View style={styles.container}>
      <View style={styles.textInputWrapper}>
        {/* 뒤로가기 버튼 */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/public/components/TextInputSection/arrow.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <TextInput /* input */
          placeholder="목적지를 입력해주세요."
          placeholderTextColor="#000000"
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={() => {
            if (inputValue.trim() !== '') {
              navigation.navigate('SearchPage_2', {keyword: inputValue});
            }
          }}
        />
        {/* 마이크 아이콘 */}
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
  },

  backButton: {
    display: 'flex',
    marginLeft: 15,
    retate: '90deg',
  },

  backIcon: {
    display: 'flex',
    width: 24,
    height: 24,
    transform: [{rotate: '270deg'}],
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
    paddingLeft: 10,
    fontSize: 18,
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

  iconArrow: {
    marginTop: 18,
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#9090FF',
    backgroundColor: '#FFFFFF',
    height: 57,
    width: 57,
    borderRadius: 50,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.25)',
  },
});
