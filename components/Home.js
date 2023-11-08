import React, {useState} from 'react';
import { Button, View ,AppRegistry, StatusBar, Image,Divider,TouchableOpacity,Text,ScrollView,StyleSheet,SafeAreaView} from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/AntDesign';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FriendList from './FriendList.js';
import Adds from './Adds.js';
function GroupComm(){
 return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
  <Text>BusinessAdds</Text>
  </View>
   );
}

const Drawer = createDrawerNavigator();
const CustomDrawer = (props) =>{
return(
<View style={{flex:1,backgroundColor:'#000',borderWidth:1,borderLeftColor:'#11'}}>
<DrawerContentScrollView {...props}>
<View style={{ flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 30,
            height:150,
            backgroundColor: '#111',
            marginBottom: 10,position:'relative', bottom:30,left:0}}>
         
            <Image source={require('./images/bg.png')}style={{ width: 60, height: 60, borderRadius: 30 ,marginRight:10,marginTop:10,borderWidth:2,borderColor:'#000'}}  />
               <View>
            <Text style={{color:'#fff',fontWeight:'700',fontSize:21}}>Kenneth Barinas</Text>
            <Text style={{color:'#fff'}}>example@email.com</Text>
          </View>
    </View>
<DrawerItemList {...props}/>
</DrawerContentScrollView>
<TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: '#111',
          padding: 20,
          flexDirection:'row',
          fontWeight:'700',
          
        }} >
  <Ionicons name="logout" style={{fontSize:25, marginRight:5,color:'#fff'}}/>
        <Text style={{color:'#fff',fontSize:20,}}>Log Out</Text>
      </TouchableOpacity>
</View>
);
};

const DrawerNavigator = (props) =>{
return (
<Drawer.Navigator screenOptions={{
       headerTintColor:'#fff',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#111',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}drawerContent = {(props) => <CustomDrawer {...props}/>}>
<Drawer.Screen component ={FriendList} name='FriendList'

options={{
drawerActiveTintColor:"#fff",
    drawerInactiveTintColor:"#fff",
           title: 'Chat Meeting',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="message1"
                 size={size}
                 color={focused ? '#fff' : '#fff'}
              />
           ),
        }}/>
<Drawer.Screen component ={Adds} name='Adds'options={{
drawerActiveTintColor:"#fff",
    drawerInactiveTintColor:"#fff",
           title: 'Business Adds',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="mobile1"
                 size={size}
                 color={focused ? '#fff' : '#fff'}
              />
           ),
        }}
              />
<Drawer.Screen component ={GroupComm} name='Group Communities'options={{
drawerActiveTintColor:"#fff",
    drawerInactiveTintColor:"#fff",
           title: 'Group Communities',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="team"
                 size={size}
                 color={focused ? '#fff' : '#fff'}
              />
           ),
        }}/>
</Drawer.Navigator>
);
};
export default function MyHome(){
  const styleTypes = ['default','dark-content','light-content'];
  const [visibleStatusBar,setvisibleStatusBar] = useState(false);
  const [styleStatusBar,setStyleStatusBar]= useState(styleTypes[0]);
  return(
<NavigationContainer independent={true} >
  <StatusBar backgroundColor="#000"barStyle={styleStatusBar}/>
  <DrawerNavigator />
  </NavigationContainer>

  );
}
