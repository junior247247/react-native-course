import { Theme } from '@react-navigation/native'


export interface ThemeState extends Theme{
    currentTheme:'light'|'dark',
    //dividerColor:string;
}
type ThemeAction=

    |{type:'set-light-theme'}
    |{type:'set-datk-theme'}

export const lightTheme:ThemeState={
    currentTheme:'light',
    dark:false,
   // dividerColor: 'red',//'rgba(0,0,0,0.7)',
    colors:{
        primary: 'black',
        background: 'white',
        card: 'green',
        text: 'black',
        border: 'orange',
        notification: 'teal'
    }
}

export const DarkTheme:ThemeState={
    currentTheme:'dark',
    dark:true,
   // dividerColor: 'red',//'rgba(0,0,0,0.7)',
    colors:{
        primary: 'blue',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'orange',
        notification: 'teal'
    }
}

export const ThemeReducer = (state:ThemeState,action:ThemeAction):ThemeState => {
    switch (action.type) {
        case 'set-light-theme':
            
                return {...lightTheme}


        case 'set-datk-theme':
            return{
               ...DarkTheme
            }
    
        default:
            return state;
    }
}   
