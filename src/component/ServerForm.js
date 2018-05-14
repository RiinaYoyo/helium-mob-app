//Server Form template

import React, { Component } from 'react';
import { Image,Text, View , TextInput } from 'react-native';
import Styles from '../assets/Styles'

export default class ServerForm extends Component {
  render() {
    const changeSetting = (
      <View>
        <View>
            <Image source={require('../assets/img/logo.png')} /*style={Styles.logo}*//>
        </View>
        <Text>Nom du Serveur : </Text>
        <TextInput
            style={Styles.input}
            onChangeText={this.props.onChangeText1}
            value={this.props.inputValue1}
        />
        <Text> Adresse du serveur : </Text>
        <TextInput
            style={Styles.input}
            onChangeText={this.props.onChangeText2}
            value={this.props.inputValue2}
        />
      </View>
    )
    const showSetting = (
      <View>
        <View>
            <Image source={require('../assets/img/logo.png')} /*style={Styles.logo}*//>
        </View>
        <Text>Nom du Serveur : </Text>
        <TextInput
            style={Styles.input}
            value={this.props.inputValue1}
        />
        <Text> Adresse du serveur : </Text>
        <TextInput
            style={Styles.input}
            value={this.props.inputValue2}
        />
      </View>
    )
    return (
      <View>
        {this.props.changeValue = true? changeSetting : showSetting}
      </View>
    )
  }
}