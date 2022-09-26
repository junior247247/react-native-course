import React, { useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

interface Prop{
    uri:string,
    style?:StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri}:Prop) => {
   const {FadeIn,opacity}=  useAnimation();
    const [Isloading, setIsloading] = useState(true);
    const enLoad=()=>{
     
        FadeIn();
        setIsloading(false);
    }

  return (

    <View style={{justifyContent:'center',alignItems:'center'}}>

        {
            Isloading && <ActivityIndicator size={30} color={'red'} style={{position:'absolute'}} />
        }

        <Animated.Image

            onLoadEnd={enLoad}
            style={{
                opacity,
                width:'100%',
                height:400
            }}
            source={{uri:uri,}}
            />


    </View>
            
  )
}


