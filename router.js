import Home from './src/components/Home';
import Tata_sky from './src/components/Tata_sky';
import Touch_image from './src/components/Touch_image';
import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tata_sky" component={Tata_sky} />
      <Stack.Screen name="Touch_image" component={Touch_image} />
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
