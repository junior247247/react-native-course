import React, { useState } from 'react'
import { Switch } from 'react-native-gesture-handler';

interface Props{
    isOn:boolean;
    onChange:(value:boolean)=>void;
}

export const CustomSwitch = ({isOn,onChange}:Props) => {
    const [isEnable, setisEnable] = useState(isOn);
        
    const toggle=()=>{
        setisEnable(!isEnable);
        onChange(!isEnable);
    }


  return (
       <Switch
            trackColor={{false:'#D9D9DB',true:'#8586D6'}}
         //   thumbColor={isEnable?'#f5dd4b':'#f4f3f4'}
      
            onValueChange={toggle}  
            value={isEnable}      
        />
  )
}
