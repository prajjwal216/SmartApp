import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import Home from '../../screen/user/home';
import LeaderBoard from '../../screen/user/leaderBoard';
import Reminder from '../../screen/user/reminder';
import Icon from 'react-native-vector-icons/Ionicons';
import GLOBALS from '../../assets';
const {FONTS, COLOR} = GLOBALS;

const Tab = createBottomTabNavigator();

export default function Tabnavigator() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route, navigation}) => ({
          tabBarShowLabel: false,
          headerTitleAlign: 'center',
          headerTintColor: COLOR.WHITE,
          headerTitleStyle: {
            fontFamily: FONTS.NunitoRegular,
          },

          headerStyle: {
            backgroundColor: COLOR.PRIMARY,
            
            height: 60,
          },
          tabBarStyle: {
            height: 50,
            
            backgroundColor: COLOR.PRIMARY,
          },
          tabBarHideOnKeyboard: true,
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Nunito-Regular',
          },
          headerLeft: () => {
            return (
              <Icon
                name="menu"
                size={40}
                color="white"
                style={{marginLeft: 20}}
                onPress={() => navigation.openDrawer()}
              />
            );
          },
          tabBarIcon: ({focused, size, color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'LeaderBoard') {
              iconName = focused ? 'trophy' : 'trophy-outline';
            } else if (route.name === 'Reminder') {
              iconName = focused ? 'time' : 'time-outline';
            }
            return <Icon name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: COLOR.WHITE,
          tabBarInactiveTintColor: COLOR.WHITE,
        })}>
        <Tab.Screen
          name="LeaderBoard"
          component={LeaderBoard}
          options={{title: 'Leader board'}}
        />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Reminder" component={Reminder} />
      </Tab.Navigator>
    </View>
  );
}
