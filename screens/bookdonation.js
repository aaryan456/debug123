import React,{Component} from 'react'
import {View,Text,FlatList,TouchableOpacity,StyleSheet} from 'react-native'
import ListItem from 'react-native-elements'
import firebase from 'firebase'
import db from '../config'
import Myheader from '../components/myheader'

export default class Bookdonation extends Component{
    constructor(){
        super();
        this.state = {
          requestedbooklist:[],
          
        }
        this.requestref = null
    }
      getbooklist =()=>{
          this.requestref = db.collection("requestbooks").onSnapshot((snapshot)=>{var requestedbooklist = snapshot.docs.map(document=>document.data())
          this.setState({
              requestedbooklist:requestedbooklist,
          })
        })
      }
      componentDidMount(){
          this.getbooklist()
      }
      componentWillUnmount(){
          this.requestref()
      }
      keyExtractor = (item,index)=>index.toString()
      renderItem = ({item,I})=>{
          return(<ListItem key = {I}
            title = {item.bookname}
            subtitle = {item.reasonofrequest}
            titleStyle = {{color:'red',fontWeight:'bold'}}
            rightElement = {<TouchableOpacity><Text>View</Text></TouchableOpacity>}
            bottomDivider  
            />)
        
      }
    render(){
        return(
      <View style = {{flex:1}}>
        <Myheader title = "donateBooks" />
    <View>{this.state.requestedbooklist.length==0?(<View><Text>List of all requested books</Text></View>):(<FlatList
    keyExtractor = {this.keyExtractor}
    data = {this.state.requestedbooklist}
    renderItem = {this.renderItem}
    />)}</View>
         
      </View>

        )
    }
    
    

} 