import React, { useState } from 'react'
import { Button, Modal, RefreshControl, ScrollView, Text, ToastAndroid, View } from 'react-native'

export const PruebaComp = () => {


    const [isVisible, setisVisible] = useState(false);

        const [refreShing, setrefreShing] = useState(false);



        const getData=()=>{
            setrefreShing(true);
            setTimeout(() => {

                ToastAndroid.show('Refresco',ToastAndroid.SHORT);
                setrefreShing(false)
                
            }, 3000);
        }

  return (
 
       

        <ScrollView
            refreshControl={

                <RefreshControl 
                    refreshing={refreShing}
                    onRefresh={()=>getData()}
                />
            }
            >

        <Button title='show' onPress={()=>{setisVisible(true)}}/>
                <Modal
                    animationType='fade'
                    visible={isVisible}
                    transparent={true}
                >

                    <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center'}}>
                        <View style={{width:300,height:300,backgroundColor:'white'}}>
                            <Text>fate</Text>
                            <Button title='show' onPress={()=>{setisVisible(false)}}/>
                        </View>
                    </View>

                </Modal>


        </ScrollView>
 
  )
}
