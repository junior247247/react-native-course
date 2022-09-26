import React, { useRef } from 'react'
import { StyleSheet, View,Animated,PanResponder } from 'react-native'

export const Animation202Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponser=PanResponder.create({
    onStartShouldSetPanResponder:()=>true,
      onPanResponderMove:Animated.event([
        null,
        {
          dx:pan.x,
          dy:pan.y
        },
        
      ],{useNativeDriver:false}),
      
      onPanResponderRelease:()=>{

        Animated.spring(
          pan,{toValue:{x:0,y:0},useNativeDriver:false}
        ).start();

      }

      
  })

  return (
    <View style={style.container}>
        <Animated.View 
        
        {...panResponser.panHandlers}
          style={[pan.getLayout(),style.purpleBox]}/>

    </View>
  )
}


const style=StyleSheet.create({
    purpleBox:{
        backgroundColor:'#5856D6',
        width:150,
        height:150
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
     
        backgroundColora:'red'

        
    }
})
