import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from '../../screen/auth/introScreen';
import Login from '../../screen/auth/login';
import Register from '../../screen/auth/register';

const authStack = createStackNavigator();

const AuthStack = () => {
  return (
    <authStack.Navigator initialRouteName="IntroScreen">
      <authStack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{headerShown: false}}
      />

      <authStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <authStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </authStack.Navigator>
  );
};

export default AuthStack;
