import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import Button from '../components/Button';
import Profile from "./Profile";

const Exercise7 = () => {
  const navigation = useNavigation(); // Get navigation instance
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = text => {
    setName(text);
  };

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handleSubmit = () => {
    console.log('Submitted:', name, email);
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={handleNameChange}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Button title="Submit" onPress={handleSubmit} text="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
});

export default Exercise7;
