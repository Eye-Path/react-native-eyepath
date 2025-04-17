import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";

const TextInputComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textinputwrapper}>
                <TextInput
                    placeholder="목적지를 입력해주세요."
                    placeholderTextColor="#a9a9a9"
                    style={styles.input}
                />
                <TouchableOpacity>
                    <Image source={require('../../assets/public/microphone-01.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image source={require('../../assets/public/navigation-pointer-01.png')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
    }
const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 18,
    },

    textinputwrapper: {
        marginTop: 18,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 42,
        width: 279,
        borderWidth: 1,
        borderColor: "#9090FF",
        borderRadius: 25,
        backgroundColor: "#FFFFFF",
        justifyContent: 'space-between',
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
    },
    input: {
        paddingLeft: 9,
    },

    icon: {
        width: 24,
        height: 24,
        marginRight: 14,
    },
});
export default TextInputComponent;