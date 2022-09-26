import React, { useContext } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { check ,PERMISSIONS,PermissionStatus,request} from 'react-native-permissions'
import { PermisionContext } from '../context/PermissionContext'

/// Api Key Maps  : AIzaSyDr4Zgz2MnnLgJJpHNGjuKq0clv3C_hRxc

export const PermissionScree = () => {

  const {permission,verificarPermisodeUbicación,preguntarUbicaciónPermiso} = useContext(PermisionContext);

    

  return (
    <View style={style.container}>
      <Text style={{textAlign:'center',marginVertical:30,marginHorizontal:10,color:'black'}}>Esta app necesita los permisos del gps para obtener informacion a la ubicacion</Text>
        <Button title='Permiso' onPress={()=>preguntarUbicaciónPermiso()} />

        <Text>{JSON.stringify(permission,null,5)}</Text>
    </View>
  )
}


const style=StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white'
  }
})