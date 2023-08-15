import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const Exercise1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "white",
  }
})

export default Exercise1
