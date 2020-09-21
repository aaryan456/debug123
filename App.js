import React from 'react';
import { Text, View } from 'react-native';
import Login from './screens/login'
import {Apptabnav} from './components/apptabnavigator'
import {CreateBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
export default function App() {
  return (
   <Appcontainer/>
   
  );
}
const switchnav = createSwitchNavigator({
  Loginscreen:{screen:Login},
  BottomTab:{screen:Apptabnav}
})

const Appcontainer = createAppContainer(switchnav)



