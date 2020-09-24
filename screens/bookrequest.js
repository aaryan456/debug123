import React,{Component} from 'react'
import {View,Text,KeyboardAvoidingView,TextInput,TouchableOpacity, Alert} from 'react-native'
import firebase from 'firebase'
import db from '../config'
import Myheader from '../components/myheader'
export default class Bookdonation extends Component{
   constructor(){
       super()
       this.state = {
          userID:firebase.auth().currentUser.email,
          bookname:"",
          reasonofrequest:""
        }
   }
     createUniqueID(){
         return Math.random().toString(36).substring(7)
     } 
     addrequest = (bookname,reasonofrequest)=>{
         var userID = this.state.userID
         var randID = this.createUniqueID()
         db.collection("requestbooks").add({
            userID:userID,
            bookname:bookname,
            reasonofrequest:reasonofrequest, 
            requestID:randID
            
         })
         this.setState({bookname:"",reasonofrequest:""}
         )
         return Alert.alert("book requested sucessfully")
     }
    render(){
        return(
      <View>
          <Myheader title = "request book" />
          <KeyboardAvoidingView>

           <TextInput
           placeholder = {"enter book name"}
           onChangeText = {(text)=>{this.setState({bookname:text})}}
           value = {this.state.bookname}
           />
           <TextInput
           placeholder = {"enter reason"}
           multiline
           numberOfLines = {7}
           onChangeText = {(text)=>{this.setState({reasonofrequest:text})}}
           value = {this.state.reasonofrequest}
           />
           <TouchableOpacity
           onPress = {()=>{this.addrequest(this.state.bookname,this.state.reasonofrequest)}}
           >
 <Text>REQUEST</Text>

           </TouchableOpacity>
         
       
          </KeyboardAvoidingView>
      </View>

        )
    }
    
    

} 