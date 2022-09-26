import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../component/HeaderTitle'
import { ThemeContet } from '../context/ThemeContext'

export const ChangeThemeScreen = () => {

    const {setLighTheme,setDarkTheme,theme:{colors}} = useContext(ThemeContet);
  return (
    <View>
        <HeaderTitle title='Theme' />
      <View style={{flexDirection:'row',justifyContent:"space-between"}}>
     
        <TouchableOpacity
        onPress={setLighTheme}
            activeOpacity={0.8}
            style={{
            backgroundColor:colors.primary,
            justifyContent:'center',
            width:150,
            height:50,
            borderRadius:20
        }}>
                <Text style={{
                color:'white',
                textAlign:'center'}}>
                    Light</Text>
        </TouchableOpacity>


        
        <TouchableOpacity
        onPress={setDarkTheme}
            activeOpacity={0.8}
            style={{
            backgroundColor:colors.primary,
            justifyContent:'center',
            width:150,
            height:50,
            borderRadius:20
        }}>
                <Text style={{
                color:'white',
                textAlign:'center'}}>
                    Dark</Text>
        </TouchableOpacity>
           
      </View>
    </View>
  )
}
