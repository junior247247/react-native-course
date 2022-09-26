import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Icon } from 'react-native-vector-icons/Icon'
import { HeaderTitle } from '../component/HeaderTitle'
import { MainData } from '../interfaces/appinterfaces'
import { FlatListMenuItem } from './FlatListMenuItem'



const data=[
  {
    name:'Animate 101',
    icon:'add-circle-outline',
    component:'Animation101Scren'
    
  },
  {
    name:'Animated 202',
    icon:'add-circle-outline',
    component:'Animation202Screen'
    
  },

  {
    name:'Switches',
    icon:'toggle-outline',
    component:'SwitchScreen'
    
  },

  
  {
    name:'Alerts',
    icon:'toggle-outline',
    component:'AlertScreen'
    
  },
  {
    name:'Text Input',
    icon:'document-text-outline',
    component:'TextInputScreen'
  },
  {
    name:'Pull to refresh',
    icon:'refresh-outline',
    component:'PullToRefreshScreen'
  },
  {
    name:'Section List',
    icon:'refresh-outline',
    component:'SeccionList'
  },
  {
    name:'Modal Screen',
    icon:'refresh-outline',
    component:'ModalScreen'
  },
  {
    name:'Infinite Scrol',
    icon:'refresh-outline',
    component:'InfiniteScrolScreen',
  },

  {
    name:'Slide Screen',
    icon:'refresh-outline',
    component:'SlideScreen',
  },

  {
    name:'Change Theme Screen',
    icon:'refresh-outline',
    component:'ChangeThemeScreen',
  }
  
]

export const HomeScreen = () => {





  const ItemSeparator=()=>{
    return(
      <View style={{borderBottomWidth:1,marginVertical:10}}/>
    )
  }
  return (  
    <View style={{flex:1,margin:20}}>
          <HeaderTitle  title='Opciones de menu'/>
          <FlatList 
          //  ListHeaderComponent={()=><HeaderTitle title='Opciones de menu'/>}
            data={data}
            renderItem={({item})=><FlatListMenuItem menuItem={item}/>}
            keyExtractor={(item)=>item.name}
            ItemSeparatorComponent={()=>ItemSeparator()}
          />
    </View>
  )
}
