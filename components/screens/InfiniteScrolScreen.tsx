import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '../component/FadeInImage';
import { HeaderTitle } from '../component/HeaderTitle'
import { PruebaComp } from '../component/PruebaComp';

export const InfiniteScrolScreen = () => {

    const [number, setnumber] = useState([0,1,2,3,4,5]);
    
    const loadMore=()=>{
        const newArr:number[]=[];

        for(let i=0 ; i<5;i++){
            let n=number.length+i;
       
                // setnumber([...number,newArr]);
                // setnumber(resp=>[...resp,number+1]);
                 ///console.log(number);
                 setnumber(resp=>[...resp,n]);
     
            
           
        }
  

       
        
    }

    const renderItem=(item:number)=>{
        return(
            <FadeInImage key={item} uri={`https://picsum.photos/id/${item}/200/300`}/>
            
        )
    }


  return (
    <View style={{flex:1}}>
    
      {  <FlatList
            ListHeaderComponent={    <HeaderTitle title='Infiite Scrol'/>}
            data={number}
            keyExtractor={(item)=>item.toString()}
            renderItem={({item})=>renderItem(item)}

                onEndReached={loadMore}
                onEndReachedThreshold={0.5}

                ListFooterComponent={()=>(
                    <View style={{height:150 ,justifyContent:'center'}}>
                        <ActivityIndicator size={80} />
                    </View>
                )}
  />}

   {/* <PruebaComp/>*/}
    </View>
  )
}

const style=StyleSheet.create({
    textImen:{
        height:150,
    }
})