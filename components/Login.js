import React, { Component,useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet, Image,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';




export default class Login extends Component {
  
 constructor(props) {
  super(props);
  this.state = {
    email: '',
    password: '',
    msgError: '',
  };
}


handleSubmit = () => {
  const { email, password } = this.state;
  let msgError = '';

  // Validate email
  if (!email && !password) {
    msgError = 'Email and Password is required';
  }
    else if (!email){
      msgError = 'Email is required'
 }    else if (!/\S+@\S+\.\S+/.test(email)) {
    msgError = 'Email is invalid';
  }

  // Validate password
 else if (!password) {
    msgError = 'Password is required';
  } else if (password.length < 6) {
    msgError = 'Password must be at least 6 characters';
  }

  if (msgError) {
    this.setState({ msgError});
  } else {
    this.props.navigation.navigate("Home");
  }
}


				 
  LogIn = ()=>{
  this.props.navigation.navigate("SignUpSreen");
}
  render(){
    
  return (
    <View style={styles.container}>
     <Image source={require('./images/bg.png')} style={styles.bg}/>
    <View style={styles.form}>
   <View style={styles.input}>
     <AntDesign name="mail" size={34} color="#9a73ef"style={{marginTop:5,marginLeft:5,}}/> 
      <TextInput
        style={styles.inputStyle}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
          value={this.state.email}
        onChangeText={email => this.setState({ email })}
      />
      </View>  
         <View style={styles.input}>
     <AntDesign name="lock" size={34} color="#9a73ef"style={{marginTop:5,marginLeft:5,}}/> 
      <TextInput
        style={styles.inputStyle}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        secureTextEntry={true}
      value={this.state.password}
        onChangeText={password => this.setState({ password })}
      />
       </View>  

  <View style={styles.errorMsg}>   
   {this.state.msgError ? <Text style={{color:'red',fontSize:18}}>{this.state.msgError}</Text> : null}
               </View>  
      <TouchableOpacity
        onPress={this.handleSubmit}
        style={styles.submitButton}>
        <Text style={styles.submitButtonText}> Login </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={this.LogIn}>
        <Text style={styles.submitButtonText}>Create New Account </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  bg:{
    alignSelf: 'stretch',
    width: '100%',
    height:750,
    position:'absolute',
    left:0,
    top:0,
  },
  form:{
    position:'absolute',
    left:0,
    top:300,
    width: '100%',
  },
  input: {
    margin: 15,
    borderColor: '#7a42f4',
    borderWidth: 1,
    borderRadius:5,
    paddingBottom:10 ,
    flexDirection:'row',
    
  },
  inputStyle: {
  flex: 1,
  height: 35,
  marginLeft:5,
  fontSize:20,
  marginTop:5,
},
errorMsg:{
  width:280,
  fontSize:21,
  marginLeft:15
},
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 50,
    alignItems: 'center',
    borderRadius:20,
  },
  submitButtonText: {
    color: 'white',
alignItems: 'center',
fontSize:20,
    fontWeight: 'bold',
  },
});
