import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './componen/Greeting';
import Layout from './componen/Layout';
import Provinsi from './componen/Provinsi';
import Global from './componen/Global';

class App extends Component {

  constructor(){
  super();
  this.state = {
    greeting: 'Welcome to React Native'
  }
}


componetDidMount(){

}

  render(){
    return(
      <View>
        <Layout />
        <Global/>
        <Provinsi />
      </View>
      
    )
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

export default App;
