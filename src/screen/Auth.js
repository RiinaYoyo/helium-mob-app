import React, { Component } from 'react';
import { Image ,TextInput, View , TouchableHighlight , Text} from 'react-native';
import Styles from '../assets/Styles';
import DataBase from '../DataBase'


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
      //Simple SQL delete action
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
        <View>
          <Text>Nom du Serveur : </Text>
          <TextInput
            style={Styles.input}
            onChangeText={(serverName) => this.setState({serverName})}
            value={this.state.serverName}
          />
          <Text> Adresse du serveur : </Text>
          <TextInput
            style={Styles.input}
            onChangeText={(serverAdress) => this.setState({serverAdress})}
            value={this.state.serverAdress}
          />
          <TouchableHighlight 
            onPress={this.reachConnect}
          >
          <Text style={Styles.textButton}> Confirm </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}