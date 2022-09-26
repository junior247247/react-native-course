import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { PermisionContext } from '../context/PermissionContext';
import { LoadingScreen } from './LoadingScreen';
import { MapScreen } from './MapScreen';
import { PermissionScree } from './PermissionScree';


const Stack=createStackNavigator();


export const Navigation = () => {
  const {permission} = useContext(PermisionContext);

    if(permission.locationStatus=='unavailable'){
      return(
        <LoadingScreen/>
      )
    }

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {
        (permission.locationStatus=='granted') ? <Stack.Screen  name='MapScreen' component={MapScreen}/>:
        <Stack.Screen  name='PermissionScree' component={PermissionScree}/>
      }
       
      
    </Stack.Navigator>
  )
}
  