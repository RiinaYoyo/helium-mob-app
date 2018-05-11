import React from 'react';
import MainNavigator from "./src/navigator/MainNavigator";
import Connect from './src/screen/Connect';
import { View } from 'react-native';
import Styles from './src/assets/Styles';
import DataBase from './src/DataBase'


export default class App extends React.Component {

  //Create DB if doesn't exist when app start
  componentDidMount(){
    this.createDb()
  }

  //Simple Create Db SQL
  createDb=()=>{
    DataBase.transaction(tx => {
      tx.executeSql(
        'create table if not exists server (id integer primary key not null, server_name text not null, server_adress int not null);'
      );
    });
  }

  render() {
    //render main navigator
    return (
      <View style={{flex:1}}>
        <MainNavigator/>
      </View>
    );
  }
}


