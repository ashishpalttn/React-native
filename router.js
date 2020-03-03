import Home1 from './src/components/Home1';
import Home2 from './src/components/Home2';
import Home3 from './src/components/Home3';
import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home1} />
      <Stack.Screen name="Home2" component={Home2} />
      <Stack.Screen name="third" component={Home3} />
    </Stack.Navigator>
  );
};

const app = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
export default app;
