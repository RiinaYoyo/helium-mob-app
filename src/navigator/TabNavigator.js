import {createBottomTabNavigator} from "react-navigation";
import React, { Component } from 'react'
import Home from '../screen/Home'
import ArticleList from '../screen/ArticleList';
import ContactList from '../screen/ContactList';
import Calendar from '../screen/Calendar';

    //Navigate between app's different screen
    const TabNavigator = createBottomTabNavigator({
        
        //Home screen with recent categories
        Recent:{
            screen:Home,
            navigationOptions:{
                title:'Recent',
            }
        },
        //favorite screen with liked user's article
        Favorite:{
            screen:ArticleList,
            navigationOptions:{
                title:'Favorite',
            }
        },
        //setting screen
        Setting:{
            screen:ContactList,
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
