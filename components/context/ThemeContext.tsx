
import React, { createContext, useEffect, useReducer } from 'react'
import { Appearance, AppState, useColorScheme } from 'react-native';
import { DarkTheme, lightTheme, ThemeReducer, ThemeState } from './ThemeReducer';


interface Props{
    theme:ThemeState;
    setLighTheme:()=>void;
    setDarkTheme:()=>void;
}


export const ThemeContet =createContext({} as Props);



export const ThemeContext = ({children}:any) => {



       const colorSheeme =  useColorScheme();
    
        const [theme, dispatch] = useReducer(ThemeReducer, (colorSheeme=='dark')?DarkTheme:lightTheme);

        useEffect(() => {

            (colorSheeme=='dark')?setDarkTheme():setLighTheme();
         
        }, [colorSheeme])


       /* useEffect(() => {
            AppState.addEventListener("change",(status)=>{

                if(status=='active'){
                    (Appearance.getColorScheme()=='dark')?setDarkTheme():setLighTheme();
                }
            })
        }, [])*/
        
        

    const setLighTheme=()=>{
     
        dispatch({'type':'set-light-theme'});
    }

    const setDarkTheme=()=>{
        dispatch({'type':'set-datk-theme'});
    }

  return (
    <ThemeContet.Provider value={{
        theme,
        setLighTheme,
        setDarkTheme
    }}>
        {children}
    </ThemeContet.Provider>
  )
}
