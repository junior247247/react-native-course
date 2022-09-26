import React, { useState,useEffect } from 'react'
import { ScrollView, View,RefreshControl } from 'react-native'
import { HeaderTitle } from '../component/HeaderTitle'




//import {Client} from 'pg';



export const PullToRefreshScreen = () => {
    const [refresh, setrefresh] = useState(false);
 

   
    

    const [data, setdata] = useState<String>('dasdas');
    
        const onRefresh=()=>{
            setrefresh(true);

            setTimeout(() => {
                setrefresh(false);
                setdata('Hola mundo');
                
            }, 5000);
        }
    
    return (
    <ScrollView
        refreshControl={
            <RefreshControl
                    refreshing={refresh}
                    progressViewOffset={10}
                    progressBackgroundColor={'white'}
                    onRefresh={onRefresh}
                    colors={['white','red','orange']}
                    
            />
        }
    >
         <View style={{margin:15}}>
        <HeaderTitle title='Pool to refresh'/>

      
         <HeaderTitle title={data+''}/>
      </View>
    </ScrollView>
   
  )
}
