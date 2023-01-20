import React from 'react';

import Tabnavigator from '../tab';
import CustomDrawer from './CustomDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../../screen/user/profile';
import COLOR from '../../assets/color';

const Draw = createDrawerNavigator();

export default function Drawernavigator() {
  return (
    <Draw.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Tab"
      screenOptions={({route, navigation}) => ({
        headerTintColor: 'white',
        //headerShown: false,
        headerLeft: () => {
          return (
            <Icon
              name="chevron-back"
              size={40}
              color="white"
              style={{marginLeft: 20}}
              onPress={() => navigation.goBack()}
            />
          );
        },
        drawerLabelStyle: {fontSize: 20},
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25,
          fontFamily: 'Nunito-Regular',
        },
        headerStyle: {
          backgroundColor: COLOR.PRIMARY,
          height: 60,
        
        },
      })}>
      <Draw.Screen
        name="Tab"
        component={Tabnavigator}
        options={{headerShown: false}}
      />

      <Draw.Screen name="Profile" component={Profile} />
    </Draw.Navigator>
  );
}
