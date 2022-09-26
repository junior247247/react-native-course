import React from 'react'
import {View,StyleProp,ViewStyle,Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props{
    iconName:string;
    onPress:()=>void;
    style:StyleProp<ViewStyle>;
}

export const FabBotton = ({iconName,onPress,style}:Props) => {
  return (
    <View style={{...style as any,borderRadius:100}}>
        <TouchableOpacity 
            style={{
                zIndex:9999,
                height:50,width:50,
                backgroundColor:'black',
                borderRadius:100,
            }}
            onPress={onPress}
          activeOpacity={0.8}>

        </TouchableOpacity>
    </View>
  )
}
