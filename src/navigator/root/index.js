import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from '../authStack/index';
import Drawernavigator from '../Drawer/Drawer';
import AdminStack from '../AdminStack/inedx';
import PlayQuiz from '../../screen/user/playQuiz';
import React from 'react';
import GLOBALS from '../../assets';
const {FONTS, COLOR, IMAGE} = GLOBALS;
const stack = createStackNavigator();
const Root = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="Drawer"
        component={Drawernavigator}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="AdminStack"
        component={AdminStack}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="PlayQuiz"
        component={PlayQuiz}
        options={{
          title: 'Play quiz',
          tabBarShowLabel: false,
          headerTitleAlign: 'center',
          headerTintColor: COLOR.WHITE,
          headerTitleStyle: {
            fontFamily: FONTS.NunitoRegular,
          },
          headerLeft: () => null,

          headerStyle: {
            backgroundColor: COLOR.PRIMARY,
          
            height: 60,
          },
          tabBarStyle: {
            height: 50,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLOR.PRIMARY,
          },
          tabBarHideOnKeyboard: true,
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Nunito-Regular',
          },
        }}
      />
    </stack.Navigator>
  );
};

export default Root;
