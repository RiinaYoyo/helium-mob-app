//Main Tab Navigator

import {createBottomTabNavigator} from "react-navigation";
import React, { Component } from 'react'

import Recent from '../screen/Recent'
import Favorite from '../screen/Favorite';
import Setting from '../screen/Setting';

    //Navigate between app's different screen tab
    const TabNavigator = createBottomTabNavigator({
        
        //Home screen with recent categories
        Recent:{
            screen:Recent,
            navigationOptions:{
                title:'Recent',
            }
        },
        //favorite screen with liked user's article
        Favorite:{
            screen:Favorite,
            navigationOptions:{
                title:'Favorite',
            }
        },
        //setting screen
        Setting:{
            screen:Setting,
            navigationOptions:{
                title:'Setting',
            }
        },

    },{
        //start screen : Recent
        initialRouteName: 'Recent',
        //Style options
        tabBarOptions: {
            activeBackgroundColor: "#0F5A5C",
            inactiveBackgroundColor: "#0F5A5C",
        },
    })
    export default TabNavigator;
