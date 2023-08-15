import {useState} from 'react'
import { View,Text, StyleSheet } from 'react-native'
import Button from '../components/Button';

const Exercise4 = () => {
  const [count, setCount] = useState(0);

  const handleButtonTouch = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text>You have pressed the button {count} time(s)</Text>
      <Button onPress={handleButtonTouch} text="Tap Me" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Exercise4
