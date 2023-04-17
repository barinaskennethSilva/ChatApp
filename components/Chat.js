
import React, { Component,useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet, Image,ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
export default class ChatScreen extends Component {
  render(){
      
  return (
 <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
  <View style={styles.header}>
  <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backIcon}>
  <Ionicons name='arrowleft'style={{color:'#fff',fontSize:22}}/>
  </TouchableOpacity>
  <View style={styles.profileChat}>
   <Image source={require('./images/bg.png')}style={{ width: 50, height: 50, borderRadius: 30 ,marginRight:10,marginTop:5,borderWidth:2,borderColor:'#111'}}  /> 
 <Text style={{color:'#fff',fontSize:20,marginTop:8}}>Kenneth Barinas</Text>
  </View>
   </View>
   <ScrollView style={styles.scrollView}>
<View style={styles.chatboard}>
  <View style={styles.msgboxReciever}>
 <Text style={styles.msgText}>Hello world this is my chat</Text>
 <Text style={{color:'#fff',marginTop:5}}>7:22 AM</Text>
 </View>
 <View style={styles.msgboxSender}>
 <Text style={styles.msgText}>Hello world this is test subject</Text>
 <Text style={{color:'#fff',marginTop:5}}>7:32 AM</Text>
 </View>
 </View>
 </ScrollView>
  <View style={styles.msgForm}>
 <View style={styles.msgInput}>
  <TextInput placeholder ="Type a message..."style={styles.Inputmsg}placeholderTextColor="lightgrey"/>
 <TouchableOpacity style={styles.btnSend}>
 <Text style={{color:'#fff',fontSize:15,fontWeight:'700'}}> Send</Text>
 </TouchableOpacity>

 </View>
 </View>
  </View>
  );
}
}

const styles = StyleSheet.create({
header:{
  backgroundColor:'#111',
  borderWidth:1,
  borderTopColor:'#fff',
  padding:10,
  width:'100%',
  height:70,
  position:'absolute',
  top:0
},
scrollView: {
    backgroundColor: '#000',
    width:360,
    marginTop:70
  },
backIcon:{
  marginTop:10,
  marginLeft:5
},
profileChat:{
   flexDirection:'row',
   width:280,
   position:'relative',
   bottom:38,
   left:35
},
chatboard:{
  width:'100%'
},
msgboxSender:{
  backgroundColor:'#9a73ef',
borderRadius:10,
padding:10,
marginTop:30,
width:200,
flexDirection:'column',
position:'relative',
left:10
},
msgboxReciever:{
  backgroundColor:'dodgerblue',
borderRadius:10,
padding:10,
marginTop:30,
width:200,
flexDirection:'column',
position:'relative',
left:110
},
msgText:{
color:'#fff',
},
msgForm:{
  position:'absolute',
bottom:0,
width:'100%',
backgroundColor:'#2d2d2d',
padding:10
},
msgInput:{
  flexDirection:'row',
  position:'relative',
  backgroundColor:'#111',
borderRadius:10,
padding:5,
width:317
},
btnSend:{
  height:40,
  width:60,
  backgroundColor:'dodgerblue',
  borderRadius:10,
  padding:8
  },
  Inputmsg:{
    width:250,
    color:'#fff',
    paddingLeft:10,
  }
});