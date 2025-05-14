import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const TextInputSection = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.textInputWrapper} 
                onPress={() => navigation.navigate('SearchPage')} // 여기서 바로 이동
            >
                <TextInput
                    placeholder="경기대학교 수원 캠퍼스 후문(동문)"
                    placeholderTextColor="#000000"
                    style={styles.input}
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
        marginTop: 18,
    },
    textInputWrapper: {
        marginTop: 18,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        width: 350,
        borderWidth: 1,
        borderColor: "#9090FF",
        borderRadius: 25,
        backgroundColor: "#FFFFFF",
        justifyContent: 'space-between',
    },
    input: {
        paddingLeft: 11,
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
