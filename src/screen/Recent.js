import React from 'react';
import {Image,ActivityIndicator, Button ,TextInput, Text, View } from 'react-native';
import Styles from '../assets/Styles';
import axios from 'axios';
import ArticleCard from '../component/ArticleCard'



export default class Recent extends React.Component {

  //Set initial State
  state={
    //user wanted id
    wantedId:"25",
    // current article id
    ArticleId:"25",
    //if component is loadind, this is true
    isLoading: true,
    //Promise to get server adress in props from navigation
    server : this.props.navigation.state.params.serverAdress,
  }

  //when reach this screen
  componentDidMount(){
    //get article function
    this.getArticle(parseInt(this.state.ArticleId) , this.state.server)
  }

  //Get all data of one article function with table id , serveradress, table for parameters
  getArticle =(id , server , table="m4y1p_content")=>{
    //Simple axios Request to an api
    axios.get(`${server}/${table}/${id}`)
    .then((response)=>{
      
      //if data is loaded
      if(response != null){
        
        //filter introtext
        let result = this.filterHtmlTag(response.data.introtext);       
        result = this.FormatStr(result)
        //parse to json images url response
        let image =JSON.parse(response.data.images)

        //set state with article data
        this.setState({
          articleTitle: response.data.title,
          introText : result,
          articleImage:image.image_intro,
          createdDate:response.data.created,
          //Set isLoading to false for end Loading
          isLoading: false
        })
      }
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

  //Remove multiple space into a string
  FormatStr=(Str)=>{
		StrNewStr="";
		for(i=0;i<=Str.length;i++){
			StrChar=Str.substring(i,i+1);
			if(StrChar!=" " || Str.substring(i-1,i)!=" "){
				StrNewStr=StrNewStr+StrChar;
			}
    }
    return StrNewStr
	}

  //Button change article action
  changeArticle=( id )=>{
    //change isLoading to true
    this.setState({
      isLoading : true
    })
    //Change article with param id
    this.getArticle(parseInt(id) , this.state.server)
  }

  render() {
    //if loaded data
    const Loaded = (
      <View>
        <ArticleCard
          title={this.state.articleTitle}
          text={this.state.introText}
          url={this.state.articleImage}
          onChangeText={(wantedId)=>{this.setState({wantedId})}}
          wantedId={this.state.wantedId}
          created={this.state.createdDate}
          onPress={()=>{ this.changeArticle(this.state.wantedId)}}
        />
      </View>
    )
    return (
      <View style={Styles.container}>
        {
          //if data article set in state show loaded component else show react native activity indicator
          this.state.isLoading == true?<ActivityIndicator/>:Loaded
        }
      </View>
    );
  }
}