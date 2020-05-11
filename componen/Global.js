import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'

class ListGlobal extends React.Component{
    constructor(){
        super();
        this.state ={
            global:[
                {                   
                    "id":1,
                    "positif":4101482, //data from https://covid19.mathdro.id/api
                    "sembuh":1408771,//data from https://covid19.mathdro.id/api
                    "death":282700//data from https://covid19.mathdro.id/api
                 }
                 
            ]
        
            
        }
        
        }
        
        renderItem = ({item}) =>(
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop:10
              }}>
            <Text style={{ backgroundColor: 'powderblue' }}>Positif : {item.positif}</Text>
            <Text style={{ backgroundColor: 'skyblue'}}>Sembuh   :{item.sembuh}</Text>
            <Text style={{ backgroundColor: 'steelblue'}} >Death   :{item.death}</Text>
            
            </View>
        )

    render(){
        return(
            <View>
            <FlatList
            data= {this.state.global}
            keyExtractor={item => item.id.toString()}
            renderItem={(this.renderItem)}
            
            />
            </View>
        )
    }

}
export default ListGlobal;