import React, { Component } from 'react'
import App from "../../App"
import { ActivityIndicator ,Image ,TextInput, View , TouchableHighlight , Text } from 'react-native'
import Styles from '../assets/Styles'
import Colors from '../assets/Colors'
import DataBase from '../DataBase'


export default class Connect extends Component {
  
  //Set initial State
  state={
    serverName:"",
    serverAdress:""
  }
  //When reach this screen
  componentDidMount(){
    //Get server stored in database
    this.tryConnect()
  }

  //Get server information in database
  tryConnect=()=>{
    //Simple select SQL action
    DataBase.transaction(tx => {
      tx.executeSql('SELECT * FROM server WHERE id = 1;'
      ,[],
      //Get response (array) into and object and filter it with getServerIp function 
      (_, { rows: { _array } }) => this.getServerIp( _array[0]),
      );
    })
  }

  //Get value of recieve object and set it to state
  getServerIp=(ip)=>{
    ip = Object.values(ip)
    this.setState({
        serverName:ip[1],
        serverAdress : ip[2]      
    })
  }
  //Connect button action
  reachHome=()=>{
    //Navigate to Recent screen with server adress in props
    this.props.navigation.navigate('Recent',{serverAdress : this.state.serverAdress} )
  }
  //Change server button action
  reachAuth=()=>{
    //Navigate to Auth screen
    this.props.navigation.navigate({ routeName: 'Auth' }) 
  }

  render() {
    //form with Current server information
    const Loaded = (
      <View>
      <Text>Nom du Serveur : </Text>
      <TextInput
        style={Styles.input}
        value={this.state.serverName}
      />
      <Text> Adresse du serveur : </Text>
      <TextInput
      style={Styles.input}
      value={this.state.serverAdress}
      />
      </View>

    );
    //render screen
    return (
      <View style={Styles.container}>
        {
          //if servername set in state show current server information
          //else show react activity indicator
          this.state.serverName != ""?Loaded:<ActivityIndicator/>
        }
        <View style={Styles.row}>
        <TouchableHighlight 
          onPress={this.reachAuth}
        >
        <Text style={Styles.textButton}> Change Server </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.reachHome}
          
        >
        <Text style={Styles.textButton}> Connect </Text>
        </TouchableHighlight>
        </View>
        </View>
    )
  }
}