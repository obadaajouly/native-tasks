import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const pageName = [
    { name: "Home", link: "HomeScreen" },
    { name: "Movies", link: "MoviesScreen" },
    { name: "Series", link: "SeriesScreen" },
    { name: "About", link: "AboutScreen" },
    { name: "Contact", link: "ContactScreen" },
];

const HomeStackScreen = () => (
  <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const Header = () => {
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                {/* <Tab.Screen name="Movies" component={MoviesStackScreen} />
                <Tab.Screen name="Series" component={SeriesStackScreen} />
                <Tab.Screen name="About" component={AboutStackScreen} />
                <Tab.Screen name="Contact" component={ContactStackScreen} /> */}
            </Tab.Navigator>
        </View>
    );
};

export default Header
