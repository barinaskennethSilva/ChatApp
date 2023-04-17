import * as React from 'react';
import { View, StyleSheet,Image, TouchableOpacity,Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={
          require('./AddsVideo/video1.mp4') }
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <TouchableOpacity style={styles.buttons} onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }>
<Image source={require('./AddsImg/2_20230401_222751_0001.png')}style={{width: '100%',height:200,borderRadius:10}}/>
 <View style={styles.infoAdds}>
<Text style={{color:'#fff',fontWeight:'700',fontSize:20,textAlign:'center'}}>Appchat</Text>
<Text style={{color:'#fff',fontSize:18}}>Click to Show more Info</Text>
</View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
    marginTop:80
  },
  buttons: {
    borderWidth:1,
    borderColor:'#111',
    borderRadius:10,
    width:'95%',
    position:'absolute',
    left:10,
    top:50,
    height:202
  },
  infoAdds:{
    position:'relative',
    bottom:140,
    left:60,
    width:220
  }
});
