import React, { Component } from 'react'
import App from "../../App"
import { Image ,TextInput, View , Button , Text } from 'react-native'
import Styles from '../assets/Styles'
import Colors from '../assets/Colors'


export default class GetApiAdress extends Component {
  state = {
    requestApi:"",
  }
  connectToApi=()=>{
    App.defaultProps.serverAdr = this.state.requestApi
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View>
        <Image source={require('../../assets/img/logo.png')}/>
        <Text style={Styles.title}>Entrer l'URL du Web Service</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(requestApi) => this.setState({requestApi})}
        value={this.state.requestApi}
        />
        <Button
        onPress={this.connectToApi}
        title="Connection"
        color={Colors.blue}
        />
        
      </View>
    )
  }
}