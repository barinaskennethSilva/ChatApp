import * as React from 'react';
	import { View, Text } from 'react-native';
	import { NavigationContainer } from '@react-navigation/native';
	import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './components/Login.js';
import SignUpSreen from './components/SignUp.js';
import Home from './components/Home.js';
	import FriendList from './components/FriendList.js';
	import Adds from './components/Adds.js';
	import linking from "./linking";
	const Stack = createNativeStackNavigator();

	function MyStack() {
	  return (
	    <NavigationContainer independent={true} >
	      <Stack.Navigator initialRouteName="login" options={{headerShown: false}}>
	        <Stack.Screen name="login" component={login} options={{headerShown: false}}/>
	      <Stack.Screen name="SignUpSreen" component={SignUpSreen} options={{headerShown: false}}/>
	            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="FriendList" component={FriendList} options={{headerShown: false}}/>
      <Stack.Screen name="Adds" component={Adds} options={{headerShown: false}}/>
      </Stack.Navigator>
	    </NavigationContainer>
	  );
	}
export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <MyStack />
    </NavigationContainer>
  );
}