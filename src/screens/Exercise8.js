import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const users = [
  {
    name: "Alice",
    age: 28,
    hobbies: ["reading", "painting", "hiking"],
  },
  {
    name: "Bob",
    age: 32,
    hobbies: ["gaming", "cooking", "photography"],
  },
  {
    name: "Zara",
    age: 30,
    hobbies: ["yoga", "traveling", "meditation"],
  },
  {
    name: "Charlie",
    age: 22,
    hobbies: ["playing guitar", "surfing", "skateboarding"],
  },
  {
    name: "David",
    age: 25,
    hobbies: ["swimming", "photography", "gardening"],
  },
  {
    name: "Emily",
    age: 29,
    hobbies: ["writing", "traveling", "yoga"],
  },
  {
    name: "Frank",
    age: 35,
    hobbies: ["playing basketball", "cooking", "hiking"],
  },
  {
    name: "Grace",
    age: 27,
    hobbies: ["drawing", "baking", "dancing"],
  },
  {
    name: "Henry",
    age: 30,
    hobbies: ["coding", "playing piano", "hiking"],
  },
  {
    name: "Ivy",
    age: 24,
    hobbies: ["painting", "reading", "gardening"],
  },
  {
    name: "Jack",
    age: 28,
    hobbies: ["traveling", "photography", "surfing"],
  },
  {
    name: "Taylor",
    age: 26,
    hobbies: ["playing guitar", "dancing", "gardening"],
  },
  {
    name: "Uma",
    age: 24,
    hobbies: ["painting", "baking", "skateboarding"],
  },
  {
    name: "Vincent",
    age: 30,
    hobbies: ["coding", "playing piano", "photography"],
  },
  {
    name: "Wendy",
    age: 28,
    hobbies: ["hiking", "writing", "yoga"],
  },
  {
    name: "Xander",
    age: 22,
    hobbies: ["reading", "cooking", "surfing"],
  },
  {
    name: "Yara",
    age: 27,
    hobbies: ["dancing", "traveling", "gardening"],
  },
  {
    name: "Zane",
    age: 29,
    hobbies: ["gaming", "painting", "skateboarding"],
  },
];

const Exercise8 = () => {

  const renderItem = ({ item }) => (
    <View style={[styles.userCard, { backgroundColor: getRandomColor() }]}>
      <Text>Name: {item.name}</Text>
      <Text>Age: {item.age}</Text>
      <Text>Hobbies: {item.hobbies.join(", ")}</Text>
    </View>
  );

  const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };

  return (
    <FlatList style={{marginVertical:10}}
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.name} // Use a unique key for each item
    />
  );
};

const styles = StyleSheet.create({
  userCard: {
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
});

export default Exercise8;
