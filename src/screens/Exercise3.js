import React from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import Button from "../components/Button";

const Exercise3 = () => {
  return (
    <View style={styles.container}>
      <Button
        onPress={
          (handleButtonPress = () => {
            Alert.alert("Hello");
          })
        }
        text="Say Hello"
      />

      <Button
        onPress={
          (handleButtonPress = () => {
            Alert.alert("Goodbye");
          })
        }
        text="Say Goodbye"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Exercise3;
