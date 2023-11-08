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
  
 constructor(props){
		super(props);
		this.state={
			userEmail:'',
			userPassword:''
		}
	}
	
	 login = () =>{
		const {userEmail,userPassword} = this.state;
		
	/*	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;*/
		if(userEmail==""){
			//alert("Please enter Email address");
		  setErrormsg('Please enter Email address')
			
		}
		
	/*	else if(reg.test(userEmail) === false)
		{
		//alert("Email is Not Correct");
		this.setState({email:'Email is Not Correct'})
		return false;
		  }*/

		else if(userPassword==""){
		this.setState({email:'Please enter password'})
		}
		else{
		
	/*	fetch('http://maritesapp.epizy.com/login.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				email: userEmail,
				password: userPassword
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == "ok"){
				 // redirect to profile page
				 alert("Successfully Login");
				 this.props.navigation.navigate("Home");
			 }else{
				 alert("Wrong Login Details");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		
		
		Keyboard.dismiss();*/
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
        onChangeText={userEmail => this.setState({userEmail})}
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
    onChangeText={userPassword => this.setState({userPassword})}
      />
       </View>  
    <View style={styles.errorMsg}>   
      {errorMessage ? <Text style={{color:'red',}}>{errorMessage}</Text> : null}     
         
         
         </View>  
      <TouchableOpacity
        style={styles.submitButton}
        onPress={this.login}>
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
  width:250,
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
// for Sign-up
import React, {Component,useState} from 'react';
/*import AsyncStorage from '@react-native-async-storage/async-storage';*/

import {
  View,
  Text,AppRegistry,
  TouchableOpacity,
  TextInput,
  StyleSheet,Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
export default class SignUpSreen extends Component{
  constructor(props){
		super(props)
		this.state={
			name:'',
			email:'', 
			password:''				
		}
	}
	
	userRegister = () =>{
var name = this.state.name;
	var email = this.state.email;
  var password = this.state.password;
	
	const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }
	}
	
 if (!name) {
  alert("Name Field required to Fill");
} 
else if (!email){
alert("Email Field required to Fill");
}
else if (!password){
alert("Password Field required to Fill");
}

else{
this.props.navigation.navigate("Home");
}
}
  LogIn = () =>{
this.props.navigation.navigate("login");
  }
  render(){
    return (
      <View style={styles.container}>
 <Image source={require('./images/bg2.png')} style={styles.bg}/>
        <View style={styles.form}> 
    <View style={styles.input}>
     <AntDesign name="user" size={34} color="#9a73ef"style={{marginTop:5,marginLeft:5,}}/>  
       <TextInput
          style={styles.inputStyle}
          underlineColorAndroid="transparent"
          placeholder="Name"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText= {name => this.setState({name})}
          
        />
        </View>
    <View style={styles.input}>
     <AntDesign name="mail" size={34} color="#9a73ef"style={{marginTop:5,marginLeft:5,}}/>       
        <TextInput
          style={styles.inputStyle}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText= {email => this.setState({email})}
          
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
          onChangeText= {password => this.setState({password})} />
</View>

  <View style={styles.errorMsg}>   
   {this.state.msgError ? <Text style={{color:'red',fontSize:18}}>{this.state.msgError}</Text> : null}
               </View>  

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.userRegister}>
          <Text style={styles.submitButtonText}> Register </Text>
        </TouchableOpacity>
        
         <TouchableOpacity
          style={styles.submitButton}
          onPress={this.LogIn}>
          <Text style={styles.submitButtonText}> Login Account </Text>
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
    top:200,
    width: '100%',
  },
  errorMsg:{
  width:280,
  fontSize:21,
  marginLeft:15
},
  inputStyle: {
  flex: 1,
  height: 35,
  marginLeft:5,
  fontSize:20,
  marginTop:5,
},
  input: {
    margin: 15,
    borderColor: '#7a42f4',
    borderWidth: 1,
    borderRadius:5,
    paddingBottom:10 ,
    flexDirection:'row',
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
