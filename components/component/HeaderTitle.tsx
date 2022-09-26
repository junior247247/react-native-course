import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { ThemeContet, ThemeContext } from '../context/ThemeContext'


interface Props{
    title:string
}

export const HeaderTitle = ({title}:Props) => {

  const {theme:{colors}} = useContext(ThemeContet);
  return (
    <View>
     
      <Text style={{fontSize:30,color:colors.text,marginBottom:20}}>{title}</Text>

    </View>
  )
}
