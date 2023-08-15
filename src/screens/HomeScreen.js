import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";



const HomeScreen = () => {
  return (
    <ScrollView styles={styles.container}>
      <StatusBar style="light" translucent={false} backgroundColor="black" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "black",
    padding: 10,
  },
  logo: {
    fontSize: 25,
    color: "red",
  },
});

export default HomeScreen;
