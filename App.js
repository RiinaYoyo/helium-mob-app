import React from 'react';
import TabNavigator from "./src/navigator/TabNavigator";
import GetApiAdress from './src/screen/GetApiAdress';
import { View } from 'react-native';
import Styles from './src/assets/Styles';
import axios from 'axios';



export default class App extends React.Component {

  state={
    requestApi:"",
  }

  render() {
    const nav = <TabNavigator/>
    const connection = <GetApiAdress/>
    return (
      <View style={Styles.container}>
        {this.props.serverAdr != undefined ? nav : connection}
      </View>
    );
  }
}


