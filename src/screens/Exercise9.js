import {useEffect,useState} from 'react'
import { View,Text, FlatList,StyleSheet } from 'react-native'
import axios from "axios"

const Exercise9 = () => {
  const [users,setUsers] = useState([])

  const renderItem = ({ item }) => (
    <View style={{borderBottomWidth:1, marginBottom:10}}>
      <Text>Name: {item.name.title} {item.name.first} {item.name.last} </Text>
    </View>
  );

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=100&inc=name')
  .then(response => {
    setUsers(response.data.results)
  })
  .catch(error => {
    console.error('Error:', error);
  });
  },[])
  return (
    <FlatList style={{marginVertical:10}}
      data={users}
      renderItem={renderItem}/>
  )
}

const styles = StyleSheet.create({
  userCard: {
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
});

export default Exercise9
