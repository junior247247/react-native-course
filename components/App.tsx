import 'react-native-gesture-handler';
import React, { useContext } from 'react'
import { DefaultTheme, NavigationContainer ,DarkTheme, Theme} from '@react-navigation/native';
import { StackNavigation } from './screens/StackNavigation';
import { ThemeContet, ThemeContext } from './context/ThemeContext';

const customTheme:Theme={
  dark:true,
  colors:{
    //...DarkTheme.colors
    primary: 'red',
    background: 'red',
    card: 'red',
    text: 'red',
    border: 'red',
    notification: 'red',

  }
}

 const App = () => {
  


  return (
    <AppState>
        
        <StackNavigation/>
    
    </AppState>
  
  )
}

export default App;



export const AppState=({children}:any)=>{

  return(
    <ThemeContext>
      {children}
    </ThemeContext>
  )
}