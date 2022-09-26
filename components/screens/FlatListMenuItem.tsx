import React, { useContext } from 'react'
import { ShadowPropTypesIOS, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MainData } from '../interfaces/appinterfaces'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemeContet } from '../context/ThemeContext';

interface Prop{
    menuItem:MainData
}

export const FlatListMenuItem = ({menuItem}:Prop) => {

   const nav=  useNavigation();
   const {theme:{colors}} = useContext(ThemeContet);


   
    

  return (
    <TouchableOpacity onPress={()=>nav.navigate(menuItem.component)}>

            <View style={style.container}>
                
                <Icon name={menuItem.icon} color={colors.primary} size={30} />

            <Text style={{...style.itemText,color:colors.text}}>- {menuItem.name}</Text>
                <View style={{flex:1}} />
            <Icon name='chevron-forward-outline' color={colors.primary} size={30} />
            
            </View>

    </TouchableOpacity>
  
  )
}


const style=StyleSheet.create({
    container:{
        flexDirection:'row',
       

    },
    itemText:{
        marginLeft:15,
        fontSize:19,
        color:'black',
        fontWeight:'bold',
        
    }
})