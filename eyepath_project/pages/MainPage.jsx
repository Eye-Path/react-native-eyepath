import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Eyepathㄹ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    fontSize: '100px',
  },
});

export default MainPage;








