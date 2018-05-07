import {createMaterialTopTabNavigator} from "react-navigation";
import React, { Component } from 'react'
import Home from './screen/Home'
import ArticleList from './screen/ArticleList';
import ContactList from './screen/ContactList';
import Calendar from './screen/Calendar';
    
    const RootTab = createMaterialTopTabNavigator({
        Home:{
            screen:Home,
            navigationOptions:{
                title:'Home',
            }
        },
        Article:{
            screen:ArticleList,
            navigationOptions:{
                title:'Article',
            }
        },
        Contact:{
            screen:ContactList,
            navigationOptions:{
                title:'Contact',
            }
        },
        Calendar:{
            screen:Calendar,
            navigationOptions:{
                title:'Calendar',
            }
        },
    },{
            initialRouteName: 'Home',
            tabBarOptions: {
              activeBackgroundColor: "#0F5A5C",
              inactiveBackgroundColor: "#0F5A5C",
            },
    })
    export default RootTab;
