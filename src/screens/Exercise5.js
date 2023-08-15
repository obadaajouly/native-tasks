import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

const Exercise5 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: 'red' }]} />
      <View style={[styles.square, { backgroundColor: 'green' }]} />
      <View style={[styles.square, { backgroundColor: 'blue' }]} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
});

export default Exercise5
