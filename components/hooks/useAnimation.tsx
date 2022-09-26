import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const posicion = useRef(new Animated.Value(-100)).current;
    const right = useRef(new Animated.Value(0)).current;

    const FadeIn=()=>{
        Animated.timing(opacity,{
            toValue:1,
            useNativeDriver:true,
            duration:1000
        }).start()


    
    
    }

    const startMoving=(initPosiciton:number,duration:number=300)=>{
        posicion.setValue(0);
        Animated.timing(posicion,{
            toValue:0,
            duration:duration,
            useNativeDriver:true,
            easing:Easing.bounce
        })
    }


    

    const FadeOut=()=>{
        Animated.timing(opacity,{
           duration:3000,
           useNativeDriver:true,
           toValue:0
        }).start()   

    

       }




  return {
    posicion,
    FadeIn,
    FadeOut,
    opacity,
    startMoving
  }
    
  
}
