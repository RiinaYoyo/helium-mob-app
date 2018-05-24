import React, { Component } from 'react'
import { Text, View } from 'react-native'
import WebViewLeaflet from 'react-native-webview-leaflet'
import positions from '../assets/positions.json'

export default class Favorite extends Component {
  
  state={
    coords:[16.267359,-61.513259,],
    isLoading : true,
  }

  componentDidMount(){
    this.getPosition(positions)
  }

  getPosition=(arr)=>{
    let result = [];
    for(let i=0 ; i<arr.length ; i++){
      let marker = {
        id: Math.floor(Math.random() * 1000),   // The ID attached to the marker. It will be returned when onMarkerClicked is called
        coords: [arr[i].fields.stop_lat, arr[i].fields.stop_lon],    // Latitude and Longitude of the marker
        name:arr[i].fields.stop_desc
      }
      result.push(marker)
    }
    return result
    console.log(result)
  }
  render(){
    return (
      <View style={{flex: 72}}>
         <WebViewLeaflet
          mapCenterCoords={this.state.coords}
          panToLocation={false}
          zoom={18}
          style={{flex:54 }}
          locations={this.getPosition(positions)}
        />
      </View>
    )
  }
}