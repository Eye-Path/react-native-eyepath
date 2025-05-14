import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';



const TmapPage = () => {
 
    return (
        <SafeAreaView style={styles.container}>
            <WebView
                originWhitelist={['*']}
                source={require('../../assets/tmap/tmap.html')}
                allowFileAccess={true}
                style={styles.webview}
            />
        </SafeAreaView>
    )
}

export default TmapPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    webview: {
        flex: 1,
    },
});