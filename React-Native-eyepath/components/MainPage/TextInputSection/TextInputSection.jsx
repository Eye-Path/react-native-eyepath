import {React, useState} from 'react';
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
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.textInputWrapper}>
        <TextInput /* input */
          placeholder="목적지를 입력해주세요."
          placeholderTextColor="#000000"
          style={styles.input}
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
      {/* 화살표 아이콘 */}
      <TouchableOpacity
        style={styles.iconArrow}
        onPress={() => navigation.navigate('SearchPage')}>
        <Image
          source={require('../../../assets/public/components/TextInputSection/navigation-pointer.png')}
          style={styles.icon}
        />
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
    marginTop: 18,
    width: '100%',
  },

  textInputWrapper: {
    marginTop: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 57,
    width: 260,
    borderWidth: 1,
    borderColor: '#9090FF',
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.25)',
  },
  input: {
    paddingLeft: 9,
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
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
