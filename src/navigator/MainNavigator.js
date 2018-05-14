//Main Switch navigator for server administration


import {createSwitchNavigator} from "react-navigation";
import TabNavigator from './TabNavigator';
import Connect from "../screen/Connect";
import Auth from "../screen/Auth"


//Main navigator app switch between tab navigatorand connections screens
const MainNavigator = createSwitchNavigator({
    //main tab navigator with app
    appStack:{
        screen : TabNavigator
    },
    //Connect screen with server informations
    Connect:{
        screen: Connect
    },
    //Authentification screen for change server informations
    Auth:{
        screen: Auth
    }
},{
    //the initial route of the application
    initialRouteName: 'Connect',
})

export default MainNavigator;

