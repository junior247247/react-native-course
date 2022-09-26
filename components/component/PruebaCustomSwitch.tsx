import React, { useState } from 'react'
import { Switch } from 'react-native';

interface Props{
    onchange:(value:boolean)=>void;
}


export const PruebaCustomSwitch = ({onchange}:Props) => {
    const [isEnamel, SetisEnamel] = useState(false);

    const toggle=()=>{
        SetisEnamel(!isEnamel);
        onchange(!isEnamel);
    }

  return (
    <Switch
    value={isEnamel}
    onValueChange={toggle}
    trackColor={{true:'black',false:'red'}}
    
    />
  )
}
