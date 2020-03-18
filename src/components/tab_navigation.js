import React from 'react';
import {StyleSheet, Text, SafeAreaView,View} from 'react-native';
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


class SectionHeader extends React.Component {
  constructor() {
    super();
  }
   HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  Screen() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'red'}}>
          <Text>Settings!</Text>
        </View>
      );
    }
  render() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={this.SettingsScreen} />
          <Tab.Screen name="Screen" component={this.Screen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
export default SectionHeader;