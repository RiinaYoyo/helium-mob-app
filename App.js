import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.243.59/api.php/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default class App extends React.Component {
  state={
    currentArticle:"",
  }
  componentDidMount(){
    instance.get('m4y1p_content/20')
    .then((response)=>{
      this.setState({
        currentArticle: response.data.title,
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.currentArticle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
