import React from 'react';
import {ActivityIndicator, Button ,TextInput, Text, View } from 'react-native';
import Styles from '../assets/Styles';
import axios from 'axios';

export default class Home extends React.Component {

  //Set intial State
  state={
    dataArticle:"",
    introtext:"",
    //Promise to get server adress in props from navigation
    server : this.props.navigation.state.params.serverAdress,
  }

  //when reach this screen
  componentDidMount(){
    //get article function
    this.getArticle(25 , this.state.server)
  }

  //Get all data of one article function with table id , serveradress, table for parameters
  getArticle =(id , server , table="m4y1p_content")=>{

    //Simple axios Request to an api
    axios.get(`${server}/${table}/${id}`)
    .then((response)=>{
      //Set data to state
      this.setState({
        dataArticle: response.data,
      })
    })
    .catch((error)=> {
      //if error console log it
      console.log(error);
    });

  }

  //filter all html element in entry str
  filterHtmlTag = (str)=>{
    if (str===null || str==='')
    {
    return false;
    }
    else
    {
    //get str to string
    str = str.toString();
    //replace html element with regExp
    str = str.replace(/<[^>]*>/g, '');
    };
    //return str
    return str
  }

  render() {
    //if loaded data
    const Loaded = (
      <View style={Styles.container}>
        <Text>{this.state.dataArticle.title}</Text>
        <Text>{this.state.dataArticle.introtext}</Text>
      </View>
    )
    return (
      <View style={Styles.container}>
        {
          //if data article set in state show loaded component
          //else show react native activity indicator
          this.state.dataArticle != ""?Loaded:<ActivityIndicator/>
        }
      </View>
    );
  }
}