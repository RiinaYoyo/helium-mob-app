import React, { Component } from 'react'
import { Image, View } from 'react-native'

export default class Banniere extends Component {
  render() {
    return (
      <View>
        <Image source={require('../../assets/img/banniere_ars.png')} /*style={Styles.logo}*//>
      </View>
    )
  }
}