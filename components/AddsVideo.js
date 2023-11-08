import React, { Component,useState } from 'react';
import { View, StyleSheet,TouchableOpacity, Button,Image ,Text} from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import Ionicons from 'react-native-vector-icons/AntDesign';
export default class AddsVideo extends Component {
//export default function AddsVideo() {
  //const video = React.useRef(null);
  //const [status, setStatus] = React.useState({});
  
 render(){
      
  return (
 <View style={styles.container}>
      <View style={styles.addsVid}>
  <View style={styles.header}>
  <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backIcon}>
  <Ionicons name='arrowleft'style={{color:'#fff',fontSize:22}}/>
  </TouchableOpacity>
   <View style={{position:'absolute',right:10,flexDirection:'row',top:5}}>
      <Image source={require('./AddsImg/2_20230401_222751_0001.png')}style={{ width:40, height:40,borderRadius:50,borderWidth:1,borderColor:'lightgrey'}}  />
      <Text style={{color:'#fff',fontWeight:'600',marginTop:10,marginLeft:5}}>Appchat</Text>
      </View>
   </View>
         <Video
        
        style={styles.video}
         source={
          require('./AddsVideo/video1.mp4') }
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        
      />
     <View style={styles.buttons}>

      </View>
         <View style={styles.detailsBtn}>
   <View style={styles.btn}>
     <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.btnIcon}>
  <Ionicons name='eye'style={{color:'#fff',fontSize:20}}/>
  </TouchableOpacity>
  <Text style={{color:'#fff',fontWeight:'700'}}>1000</Text>
       </View>
     <View style={styles.btn}>   
   <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.btnIcon}>
  <Ionicons name='message1'style={{color:'#fff',fontSize:20}}/>
  </TouchableOpacity>     
      <Text style={{color:'#fff',fontWeight:'700'}}>1000</Text>
       </View> 
 <View style={styles.btn}>
    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.btnIcon}>
  <Ionicons name='link'style={{color:'#fff',fontSize:20}}/>
  </TouchableOpacity>     
     <Text style={{color:'#fff',fontWeight:'700'}}>1000</Text>
       </View> 

       </View>
    <View style={styles.addsInfo}>
    <Text style={{color:'#fff',fontWeight:'700',fontSize:20}}>Sample Adds1</Text>
    <Text style={{color:'#fff'}}>KennethSilva@gmail.com</Text>   
      </View>
    </View>
    </View>
 
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  addsVid:{
    backgroundColor:'#111',
    width:'100%',
    height:'100%',
      },
  header:{
    flexDirection:'row',
    width:'100%',
    borderWidth:1,
    borderTopColor:'#fff',
    marginTop:10,
    height:60,
    padding:10
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: 400,
  },
  addsInfo:{
   position: 'absolute',
   bottom:10,
   left:10,
   flexDirection:'column'
  },
  detailsBtn:{
   height:200,
   flexDirection:'column',
   position:'absolute',
   top:200,
   right:10
  },
btnIcon:{
  marginTop:15,
  backgroundColor:'#111',
  height:40,
  width:40,
  borderRadius:50,
  padding:10
},
btn:{
  flexDirection:'column'
},
  backIcon: {
    marginTop:8
  },
});
