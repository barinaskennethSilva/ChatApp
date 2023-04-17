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
