import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

import TextInputComponent from '../components/textinput/TextInput';


const MainPage = () => {
  return (
    <View style={styles.backgroundwrapper}>
        <View style={styles.Banner}>
            <Text>가벼운 발걸음</Text>
            <Text style={styles.logoname}> eyePath</Text>
        </View>
        <Text style={styles.eyepathdescription}>보기 쉬운 도보 내비게이션</Text>
        <Text style={styles.eyepathdescription_2}>지금 바로 걸어 볼까요?</Text>

        <TextInputComponent />

    </View>
  );
};

const styles = StyleSheet.create({

    backgroundwrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#F8F7FF',
        paddingTop: 50,
        paddingLeft: 32,
    },

    Banner: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F8F7FF',
        fontSize: 16,
        fontWeight: 'medium',
        textAlign: 'left',
        marginTop: 32,
        fontFamily: 'Roboto',
    },

    logoname: {
        fontFamily: 'Roboto-bold',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },

    eyepathdescription: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'medium',
        color: '#000000',
        marginTop: 5,
    },

    eyepathdescription_2: {
        fontFamily: 'Roboto-bold',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 18,
    },
});

export default MainPage;