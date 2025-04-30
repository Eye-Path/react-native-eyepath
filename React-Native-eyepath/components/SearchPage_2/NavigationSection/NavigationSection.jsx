import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const navigationSection = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log("press")}>
        <Image source={require('../../../assets/public/components/NavigationSection/home.png')} style={styles.icon} />
        <Text style={styles.buttonHomeText}>집</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log("press")}>
        <Image source={require('../../../assets/public/components/NavigationSection/building.png')} style={styles.icon} />
        <Text style={styles.buttonHomeText}>회사</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log("press")}>
      <Image source={require('../../../assets/public/components/NavigationSection/tree.png')} style={styles.icon} />
        <Text style={styles.buttonHomeText}>추천명소</Text>
      </TouchableOpacity>
    </View>
  )
}

export default navigationSection

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    width: 120,
    height: 42,
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 0,
  },
  icon: {
    width: 24,
    height: 24,
  },
  buttonHomeText: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 'Medium',
    color: '#000000',
  },

})