import * as React from 'react';
	import { Button, View , StatusBar, Image,TouchableOpacity,Text,ScrollView,StyleSheet,SafeAreaView} from 'react-native';
	import { NavigationContainer } from '@react-navigation/native';
	import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/AntDesign';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChatScreen from './Chat.js';
import { useNavigation } from '@react-navigation/native';

	function FriendList() {
	  const navigation = useNavigation();
  OpenChat = (navigation) => {
    navigation.navigate("ChatScreen");
}
	 
	  return (
	    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
	    
<SafeAreaView style={styles.container}>
    <View style={{backgroundColor:'#000',borderWidth:1,borderTopColor:'#fff',flexDirection:'row',padding:13,height:60}}>
 <Text style={{color:'#fff',fontSize:20,fontWeight:'700'}}> Messages </Text>
 <TouchableOpacity style={styles.search}>
  <Ionicons name="search1" style={{fontSize:18,fontWeight:'700',color:'#fff'}}/>
</TouchableOpacity>
 </View>
  <ScrollView style={styles.scrollView}>
<TouchableOpacity style={styles.friendInfo}onPress={() => this.OpenChat(navigation)}>
 <Image source={require('./images/bg.png')}style={{ width: 60, height: 60, borderRadius: 30 ,marginRight:10,marginTop:10,borderWidth:2,borderColor:'#111'}}  /> 
 <View style={styles.status1}></View>
<View style={styles.innerInfo}>
   <Text style={{color:'#fff',fontSize:20}}>Kenneth Barinas</Text>
  <Text style={{color:'#fff'}}>Hello world</Text>
</View>
</TouchableOpacity>
<TouchableOpacity style={styles.friendInfo}>
 <Image source={require('./images/bg.png')}style={{ width: 60, height: 60, borderRadius: 30 ,marginRight:10,marginTop:10,borderWidth:2,borderColor:'#111'}}  /> 
 <View style={styles.status1}></View>
<View style={styles.innerInfo}>
   <Text style={{color:'#fff',fontSize:20}}>Kenneth Silva</Text>
  <Text style={{color:'#fff'}}>Hello PH</Text>
</View>
</TouchableOpacity>
<TouchableOpacity style={styles.friendInfo}>
 <Image source={require('./images/bg.png')}style={{ width: 60, height: 60, borderRadius: 30 ,marginRight:10,marginTop:10,borderWidth:2,borderColor:'#111'}}  /> 
 <View style={styles.status1}></View>
<View style={styles.innerInfo}>
   <Text style={{color:'#fff',fontSize:20}}>Kenneth Barinas</Text>
  <Text style={{color:'#fff'}}>Hello world</Text>
</View>
</TouchableOpacity >

<TouchableOpacity style={styles.friendInfo}>
 <Image source={require('./images/bg.png')}style={{ width: 60, height: 60, borderRadius: 30 ,marginRight:10,marginTop:10,borderWidth:2,borderColor:'#111'}}  /> 
 <View style={styles.status1}></View>
<View style={styles.innerInfo}>
   <Text style={{color:'#fff',fontSize:20}}>Kenneth Barinas</Text>
  <Text style={{color:'#fff'}}>Hello world</Text>
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.friendInfo}>
 <Image source={require('./images/bg.png')}style={{ width: 60, height: 60, borderRadius: 30 ,marginRight:10,marginTop:10,borderWidth:2,borderColor:'#111'}}  /> 
 <View style={styles.status1}></View>
<View style={styles.innerInfo}>
   <Text style={{color:'#fff',fontSize:20}}>Kenneth Barinas</Text>
  <Text style={{color:'#fff'}}>Hello world</Text>
</View>
</TouchableOpacity>
<TouchableOpacity style={styles.friendInfo}>
 <Image source={require('./images/bg.png')}style={{ width: 60, height: 60, borderRadius: 30 ,marginRight:10,marginTop:10,borderWidth:2,borderColor:'#111'}}  /> 
 <View style={styles.status1}></View>
<View style={styles.innerInfo}>
   <Text style={{color:'#fff',fontSize:20}}>Kenneth Barinas</Text>
  <Text style={{color:'#fff'}}>Hello world</Text>
</View>
</TouchableOpacity>
<TouchableOpacity style={styles.friendInfo}>
 <Image source={require('./images/bg.png')}style={{ width: 60, height: 60, borderRadius: 30 ,marginRight:10,marginTop:10,borderWidth:2,borderColor:'#111'}}  /> 
 <View style={styles.status1}></View>
<View style={styles.innerInfo}>
   <Text style={{color:'#fff',fontSize:20}}>Kenneth Barinas</Text>
  <Text style={{color:'#fff'}}>Hello world</Text>
</View>
</TouchableOpacity>

<TouchableOpacity style={styles.friendInfo}>
 <Image source={require('./images/bg.png')}style={{ width: 60, height: 60, borderRadius: 30 ,marginRight:10,marginTop:10,borderWidth:2,borderColor:'#111'}}  /> 
 <View style={styles.status1}></View>
<View style={styles.innerInfo}>
   <Text style={{color:'#fff',fontSize:20}}>Kenneth Barinas</Text>
  <Text style={{color:'#fff'}}>Hello world</Text>
</View>
</TouchableOpacity>
</ScrollView>
</SafeAreaView>
  </View>
   );
}

	const Stack = createNativeStackNavigator();

	function App() {
	  return (
	    <NavigationContainer independent={true}>
	      <Stack.Navigator screenOptions={{
       headerTintColor:'#fff',
        headerShown: false,
        headerStyle: {
          backgroundColor: '#111',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}>
	        <Stack.Screen name="FriendList" component={FriendList} />
	      <Stack.Screen name="ChatScreen" component={ChatScreen} />
	      </Stack.Navigator>
	    </NavigationContainer>
	  );
	}

	export default App;
	const styles = StyleSheet.create({
scrollView: {
    backgroundColor: '#000',
    width:360,
  },
  friendInfo: {
    flexDirection:'row',
    backgroundColor:'#000',
    height:80,
    marginTop:10,
    paddingLeft:20
  },
  innerInfo:{
    marginTop:5
  },
  status1:{
    height:20,
    width:20,
    borderRadius:50,
    backgroundColor:'green',
    position:'absolute',
    left:65,
    top:40
  },
  search:{
     height:44,
     width:44,
     borderRadius:60,
     backgroundColor:'#000',
     position:'absolute',
     top:7,
     right:10,
     padding:11
   }
	});