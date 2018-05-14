//Article Card Template

import React, { Component } from 'react'
import { Image,ActivityIndicator,ScrollView, Button ,TextInput, Text, View  } from 'react-native'
import Styles from "../assets/Styles"
import Colors from "../assets/Colors"

export default class ArticleCard extends Component {
  render() {
    return (
      <View style={Styles.card}>
        <View style={Styles.cardHeader}>
        <TextInput
            keyboardType='numeric'
            style={Styles.cardInput}
            onChangeText={this.props.onChangeText}
            value={this.props.wantedId}
          />
          <Button
            onPress={this.props.onPress}
            title="Change article"
            color={Colors.blue}
          />
        </View>
        <View style={Styles.cardBody}>
          <Image 
            source={{uri: `http://192.168.250.214/intranet_ars_dev/${this.props.url}`}}
            style={Styles.cardImage}
          />
          <ScrollView>
            <Text style={Styles.cardTitle}>
              publié le : {this.props.title}
            </Text>
            <Text style={Styles.cardCreated}>
              {this.props.created}
            </Text>
            <Text style={Styles.cardText}>
              {this.props.text}
            </Text>
          </ScrollView> 
        </View>
        <View style={Styles.cardFooter}>

        </View>
          
      </View>
    )
  }
}