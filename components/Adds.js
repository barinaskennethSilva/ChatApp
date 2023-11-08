import * as React from 'react';
	import { Button, View , StatusBar, Image,TouchableOpacity,Text,ScrollView,StyleSheet,SafeAreaView} from 'react-native';
	import { NavigationContainer } from '@react-navigation/native';
	import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/AntDesign';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddsVideo from './AddsVideo.js';
import { useNavigation } from '@react-navigation/native';

	function Adds() {
	  const navigation = useNavigation();
  OpenAdds = (navigation) => {
    navigation.navigate("AddsVideo");
}
	 SearchNav = (navigation) =>{
	   navigation.navigate("SearchBar");
	 }
	  return (
	    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
	    
<SafeAreaView style={styles.container}>
  
  <ScrollView style={styles.scrollView}>
<TouchableOpacity style={styles.buttons}onPress={() => this.OpenAdds(navigation)}>
 <Image source={require('./AddsImg/2_20230401_222751_0001.png')}style={{ width: '100%', height: '100%',borderRadius:10}}  /> 
<View style={styles.infoAdds}>
   <Text style={{color:'#fff',textAlign:'center',fontWeight:'700',fontSize:40}}>Appchat</Text>
  <Text style={{color:'#fff',textAlign:'center'}}>Click for more Details</Text>
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
	        <Stack.Screen name="Adds" component={Adds} />
	      <Stack.Screen name="AddsVideo" component={AddsVideo} />
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
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  
  buttons: {
    borderWidth:1,
    borderColor:'green',
    borderRadius:10,
    width:'95%',
    height:202,
    marginLeft:10
  },
  infoAdds:{
    position:'relative',
    bottom:140,
    left:60,
    width:220
  }
	});