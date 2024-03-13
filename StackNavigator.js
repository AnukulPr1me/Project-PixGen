import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Logo_screen from './Pages/Logo_screen';
import OnboardingScreen from './Onboarding_src/OnboardingScreen';
import Home from './Pages/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from './Pages/Search';
import AddPost from './Pages/AddPost';
import Profile from './Pages/Profile';
import AIComponent from './Pages/AIComponent';
import CustomHeader from './Pages/CustomHeader';
import Activity from './Pages/Activity';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const tab = createBottomTabNavigator();
  function ButtonTab() {
    return (
      <tab.Navigator>
        <tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarStyle: {color: 'Black'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon
                  name="home"
                  size={24}
                  color={focused ? 'blue' : 'black'}
                />
              ) : (
                <Icon
                  name="home"
                  size={24}
                  color={focused ? 'blue' : 'black'}
                />
              ),
          }}
        />

        <tab.Screen
          name="AddPost"
          component={AddPost}
          options={{
            tabBarLabel: 'AddPost',
            tabBarStyle: {color: 'Black'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon
                  name="add"
                  size={24}
                  color={focused ? 'blue' : 'black'}
                />
              ) : (
                <Icon
                  name="add"
                  size={24}
                  color={focused ? 'blue' : 'black'}
                />
              ),
          }}
        />
        <tab.Screen
          name="AI"
          component={AIComponent}
          options={{
            tabBarLabel: 'AI',
            tabBarStyle: {color: 'black'},
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Icon
                name="android"
                size={24}
                color={focused ? 'blue' : 'black'}
              />
            ),
          }}
        />

        <tab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarLabel: 'Activity',
            tabBarStyle: {color: 'Black'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name="notifications" size={24} color={focused ? 'blue' : 'black'} />
              ) : (
                <Icon name="notifications" size={24} color={focused ? 'blue' : 'black'} />
              ),
          }}
        />

        <tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarStyle: {color: 'Black'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon
                  name="person"
                  size={24}
                  color={focused ? 'blue' : 'black'}
                />
              ) : (
                <Icon
                  name="person"
                  size={24}
                  color={focused ? 'blue' : 'black'}
                />
              ),
          }}
        />
      </tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Logo"
          component={Logo_screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={ButtonTab}
          options={{ header: () => <CustomHeader title="PIXGEN" />,
            headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
