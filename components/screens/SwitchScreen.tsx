import React, { useState } from 'react'
import { Switch, Text, View } from 'react-native'
import { CustomSwitch } from '../component/CustomSwitch';
import { HeaderTitle } from '../component/HeaderTitle';

export const SwitchScreen = () => {
    const [state, setstate] = useState({
      isActive:false,
      isHappy:true
    });

    const changeData=(value:boolean,field:string)=>{
      setstate({
        ...state,
        [field]:value
      })
    }



  return (
    <View style={{flex:1,marginTop:20}}>
   <HeaderTitle title='Switches'/>

      <CustomSwitch isOn={false} onChange={(isEnable)=> changeData(isEnable,'isActive')} />
      
      <CustomSwitch isOn={false} onChange={(isEnable)=> changeData(isEnable,'isActive')} />


      <CustomSwitch isOn={false} onChange={(isEnable)=> changeData(isEnable,'isHappy')} />


      <Text style={{fontSize:30}}>{JSON.stringify(state,null,3)}</Text>
      
    </View>
  )
}
