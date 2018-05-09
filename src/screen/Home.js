import React from 'react';
import { Button ,TextInput, Text, View } from 'react-native';
import Styles from '../assets/Styles';
import axios from 'axios';
export default class Home extends React.Component {

  state={
    dataArticle:"",
    introtext:"",
  }
  componentDidMount(){
    //this.getArticle(25 , this.props.apiUrl)
  }

  /*getArticle =(id , table="m4y1p_content" , apiUrl )=>{
    axios.get(`${apiUrl}/${table}/${id}`)
    .then(function (response) {
      console.log(response);
      this.setState({
        dataArticle: response.data,
        introtext :response.data.introtext
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }*/
  render() {
    console.log(this.props.apiUrl)
    return (
      <View style={Styles.container}>
        <Text>{this.state.introtext}</Text>
      </View>
    );
  }
}