import 'react-native-gesture-handler';
import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/components/Navigation';
import { PermissionContext } from './src/context/PermissionContext';


const AppState=({children}:any)=>{
  return( 
    <PermissionContext>
      {children}
      
    </PermissionContext>
   )
  }



 const App = () => {
  return (
    <NavigationContainer>
      <AppState>
   <Navigation/>
   </AppState>

    </NavigationContainer>
 
  )
}
 export default App;

