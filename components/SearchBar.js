import React, {Component,useState} from 'react';
import{ View,Text,TextInput, TouchableOpacity,StyleSheet,ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
export default class SearchBar extends Component {
  render(){
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backIcon}>
  <Ionicons name='arrowleft'style={{color:'#fff',fontSize:22}}/>
  </TouchableOpacity>
  <TextInput placeholder="Search..."style={styles.SearchInput}placeholderTextColor="lightgrey"/>
    </View>
    <View style={styles.recentResult}>
   <ScrollView>
    </ScrollView>
    </View>
 </View>
    )
  } 
}
const styles = StyleSheet.create({
  header:{
    width:'100%',
    padding:10,
    backgroundColor:'#111',
    borderWidth:1,
  borderTopColor:'#fff',
  flexDirection:'row'
  },
  SearchInput:{
    color:'lightgrey',
    backgroundColor:'#838383',
    width:260,
    padding:5,
    paddingLeft:10,
    borderRadius:30,
    fontSize:18,
    marginLeft:10
  },
  backIcon:{
  marginTop:10,
  marginLeft:5
},
recentResult:{
  height:'100%',
  backgroundColor:"#111",
  width:'100%'
  
}
});