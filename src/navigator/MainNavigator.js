import {createStackNavigator} from "react-navigation";
import TabNavigator from './TabNavigator';
import GetApiAdress from "../screen/GetApiAdress";

const MainNavigator = createStackNavigator({
    Main:{
        screen : TabNavigator
    },
    ConnectApi:{
        screen: GetApiAdress
    }
},{
    initialRouteName: 'ConnectApi',
})

export default MainNavigator;

