import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Bookrequest from '../screens/bookrequest'
import Bookdonation from '../screens/bookdonation'
export const Apptabnav = createBottomTabNavigator({
     donatebooks:{
         screen:Bookdonation,
         navigationOptions:{
             tabBarIcon:<Image source = {require("../assets/request-list.png")} style = {{height:50,width:50}}/>,
             tabBarlabel:"donate books" 
         }
     },
     requestbooks:{
        screen:Bookrequest,
        navigationOptions:{
            tabBarIcon:<Image source = {require("../assets/request-book.png")} style = {{height:60,width:50}}/>,
            tabBarlabel:"request books" 
        }
    }

})
