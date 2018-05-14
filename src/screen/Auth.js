import React, { Component } from 'react';
import { Image ,TextInput, View , TouchableOpacity , Text} from 'react-native';
import Styles from '../assets/Styles';
import DataBase from '../DataBase';
import ServerForm from '../component/ServerForm';


export default class Auth extends Component {

  //Set initial state
  state={
    serverName : "",
    serverAdress : "",
  }

  //Connect button action
  reachConnect=()=>{
    //Change Server Name and adress
    this.changeServer(this.state.serverName , this.state.serverAdress)
    //Navigate to Connect screen
    this.props.navigation.navigate('Connect') 

  }

  //Change server in database storage function 
  changeServer=(name , adress)=>{
    //if name and adress set
    if(name != "" && adress != ""){
      //Sim192.168.250.212/WSTEST/ple SQL delete action
      DataBase.transaction(tx => {
        tx.executeSql(`DELETE FROM server WHERE id = 1 ;`);
      })
      //Simple SQL Insert action
      DataBase.transaction(tx => {
        tx.executeSql('insert into server (id ,server_name, server_adress) values (1 , ? , ?) ;', [name , adress]);
      })
    }else{

    }
    
  }

  render() {
    //Render server change form
    return (
      <View style={Styles.container}>
        <ServerForm
          changeValue={true}
          inputValue1={this.state.serverName}
          onChangeText1={(serverName) => this.setState({serverName})}
          inputValue2={this.state.serverAdress}
          onChangeText2={(serverAdress) => this.setState({serverAdress})}
        />
        <TouchableOpacity 
          onPress={this.reachConnect}
        >
        <Text style={Styles.textButton}> Confirm </Text>
        </TouchableOpacity>
      </View>
    )
  }
}