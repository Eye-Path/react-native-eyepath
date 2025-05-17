import {React, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TextInputSection = ({keyword}) => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState(keyword);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.textInputWrapper}
        onPress={() => navigation.navigate('SearchPage', {keyword: inputValue})} // 여기서 바로 이동
      >
        <TextInput
          placeholder={inputValue}
          placeholderTextColor="#000000"
          style={styles.input}
          onChangeText={setInputValue}
          editable={false} // 텍스트 입력을 막음
          pointerEvents="none" // 클릭만 가능하게 만들기
        />
        <View style={styles.iconMic}>
          <Image
            source={require('../../../assets/public/components/TextInputSection/microphone.png')}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TextInputSection;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
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
    textAlign: 'center',
    fontSize: 16,
    color: '#000000',
    flex: 1,
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
