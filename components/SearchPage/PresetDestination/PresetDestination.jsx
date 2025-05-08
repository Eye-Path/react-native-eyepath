import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const PresetDestination = () => {
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

export default PresetDestination

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    borderBottomWidth: 2,  // 전체 컴포넌트 하단에 선 추가
    borderBottomColor: '#D3D3D3',  // 회색 선
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
