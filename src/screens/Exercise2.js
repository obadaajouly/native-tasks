import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const Exercise2 = () => {
  const handleButtonPress = () => {
    Alert.alert("Hello", "You tapped the button!");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleButtonPress}>
        <Text
          style={{
            padding: 10,
            backgroundColor: "blue",
            color: "white",
            textAlign: "center",
          }}
        >
          Tap Me
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Exercise2;
