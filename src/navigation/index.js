import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen/SignInScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();
const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false}}>
              <Stack.Screen name = "SignIn" component={SignInScreen}/>
              <Stack.Screen name = "HomeScreen" component={HomeScreen}/>
             </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;