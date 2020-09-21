import React,{Component} from 'react'
import {Header,Icon} from 'react-native-elements'
import {View,Text,StyleSheet} from 'react-native'

const Myheader = props=>{
    return(
        <Header centerComponent = {{text:props.title,style:{color:"green",fontSize:15,fontWeight:'bold'}}}
        backgroundColor = "yellow" 
        />
              )
}
export default Myheader