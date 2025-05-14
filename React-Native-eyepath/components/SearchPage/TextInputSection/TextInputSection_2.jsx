import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";

const TextInputSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textInputWrapper}>
                <TextInput /* input */
                    placeholder="목적지를 입력해주세요."
                    placeholderTextColor="#a9a9a9"
                    style={styles.input}
                />
                {/* 마이크 아이콘 */}
                <TouchableOpacity style={styles.iconMic}> 
                    <Image source={require('../../../assets/public/components/TextInputSection/microphone.png')} style={styles.icon} />
                </TouchableOpacity>
            
            </View>
            </View>
    );
    }

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
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
    },
    input: {
        paddingLeft: 9,
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

}
);