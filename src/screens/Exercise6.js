import React from "react";
import { FlatList, View, StyleSheet, ScrollView,Text } from "react-native";

const App = () => {
  const data = Array.from({ length: 15 }, (_, index) => ({
    key: (index),
  }));


  const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map(item => (
      <View
        key={item.key}
        style={[styles.square, { backgroundColor: getRandomColor() }]}
      >
        <Text>{item.key+1}</Text>
      </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  square: {
    width: 100,
    height: 100,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
