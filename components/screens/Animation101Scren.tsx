import React, { useEffect, useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Scren = () => {

  const {opacity,posicion,startMoving,FadeIn,FadeOut}=useAnimation();


  return (
    <View style={{flex:1}}>
        <View style={style.container}>
        < Animated.View style={{
            ...style.purpleBox,
            opacity:opacity,
            transform:[{
                translateY:posicion,
               // translateX:top
            }]
            
            }}/>

   
        <Button title='Fade In' onPress={()=>{FadeIn(); startMoving(-100) }}/>
        <Button title='Fade Out' onPress={()=>FadeOut()}/>

        </View>
       

    </View>
  )
}

const style=StyleSheet.create({

    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    
    },

    purpleBox:{
        backgroundColor:'#5856D6',
        width:150,
        height:150
    }
})