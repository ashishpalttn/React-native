import main from '../src/components/main'
import Home from '../src/components/Home';
import Tata_sky from '../src/components/Tata_sky';
import Touch_image from '../src/components/Touch_image';
import profiles from '../src/components/profiles';
import profile_detail from '../src/components/profile_detail';
import sectionList from '../src/components/sectionList';
import alert from '../src/components/alert';
import modal from '../src/components/modal';
import api from '../src/components/api_fetch'
import Animation from '../src/components/Animation'
import Realm from '../src/components/Realm'
import tab from '../src/components/scroll_view'
import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, LogoTitle} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Mtab = createMaterialBottomTabNavigator();
const Drawer=createDrawerNavigator()


function MyStack () {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="main"
        component={main}
        options={{
          title: 'Main',
          headerStyle: {
            backgroundColor: '#2102bf',
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
                                  name="Home"
                                  component={Home}
                                  options={{
                                    title: 'Home',
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
                                  name="tata_sky"
                                  component={Tata_sky}
                                  options={{
                                    title: 'Tata Sky',
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
                                  name="image"
                                  component={Touch_image}
                                  options={{
                                    title: 'Touch Image',
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
                                  name="pass_value"
                                  component={profiles}
                                  options={{
                                    title: 'profiles',
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
                                  name="section_list"
                                  component={sectionList}
                                  options={{
                                    title: 'Section List',
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
                                  name="alert_box"
                                  component={alert}
                                  options={{
                                    title: 'Alert',
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
                                                          name="next"
                                                          component={profiles}
                                                          options={{
                                                            title: 'Alert',
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
                                  name="modal"
                                  component={modal}
                                  options={{
                                    title: 'Alert',
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
                                  name="api_fetch"
                                  component={api}
                                  options={{
                                    title: 'Api-Fetch',
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
                                  name="tab"
                                  component={tab}
                                  options={{
                                    title: 'Api-Fetch',
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
      <Stack.Screen
        name="sectionList"
        component={sectionList}
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
        name="alert"
        component={alert}
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
        name="Animation"
        component={Animation}
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
        name="Realm"
        component={Realm}
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
function tabnab(){
      return(
        <Mtab.Navigator activeColor='red' style={{backgroundColor:'yellow'}}>
          <Mtab.Screen name="Home" component={MyStack} 
         
          />
          <Mtab.Screen name="Settings" component={Tata_sky} />
          <Mtab.Screen name="Screen" component={Touch_image} />
        </Mtab.Navigator>
      )
}
function app() {
  return (
    <NavigationContainer>
       <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={tabnab} />
      <Drawer.Screen name="Article" component={profiles} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default app;