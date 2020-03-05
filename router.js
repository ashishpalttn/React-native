import Home from './src/components/Home';
import Tata_sky from './src/components/Tata_sky';
import Touch_image from './src/components/Touch_image';
import profiles from './src/components/profiles';
import profile_detail from './src/components/profile_detail';
import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, LogoTitle} from 'react-native';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#2a5724',
          },

          headerTintColor: '#fff',
          headerRight: () => (
            <Button
              onPress={() => alert('This is First Page !')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Tata_sky"
        component={Tata_sky}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#5a4194',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <Button
              onPress={() => alert('This is Second Page!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Touch_image"
        component={Touch_image}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#300a8a',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <Button
              onPress={() => alert('This is third!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
      <Stack.Screen
        name="profile"
        component={profiles}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#2a5724',
          },

          headerTintColor: '#fff',
          headerRight: () => (
            <Button
              onPress={() => alert('This is First Page !')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
      <Stack.Screen
        name="detail"
        component={profile_detail}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#2a5724',
          },

          headerTintColor: '#fff',
          headerRight: () => (
            <Button
              onPress={() => alert('This is First Page !')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
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
