import React from 'react';
import { Button ,TextInput, Text, View } from 'react-native';
import Styles from './src/Styles'
import instance from './src/api/apiConf'

export default class App extends React.Component {


  componentDidMount(){
    this.getArticle(25)
  }
  state={
    dataArticle:"",
    introtext:"",
    idArticle:'25'
  }

  //GET ARTICLE BY ID
  getArticle =(id , table="m4y1p_content" )=>{
    instance.get(`${table}/${id}`)
    .then((response)=>{
      
      this.setState({
        dataArticle: response.data,
        introtext :response.data.introtext
      })
    })
    .catch(function (error) {
      console.log(error);
    }).then((state)=>{
      let cleanText = this.filterHtmlTag(this.state.introtext);
      this.setState({
      introtext:this.filterHtmlTag(this.state.introtext),
    })
    })
    
  }


  //FILTER HTML TAGS IN STRINGS
  filterHtmlTag = (str)=>{
    if ((str===null) || (str===''))
    {
    return false;
    }
    else
    {
    str = str.toString();
    str = str.replace(/<[^>]*>/g, '');
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>{this.state.dataArticle.title}</Text>
        <TextInput
          style={{width:60,height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(idArticle) => this.setState({idArticle})}
          keyboardType='numeric'
          value={this.state.idArticle}
        />
        <Button
          onPress={()=> this.getArticle(this.state.idArticle)}
          title="search article"
        />
        <Text>{this.state.introtext}</Text>
      </View>
    );
  }
}
;
