import React, { useState } from 'react'
import { Button, Modal, Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../component/HeaderTitle'

export const ModalScreen = () => {

    const [isVisible, setisVisible] = useState(false);






  return (
    <View>
        <HeaderTitle title='ModalScreen' />

        <Button title='Abrir Modal' onPress={()=>{setisVisible(true)}}></Button>
        <Modal 
            animationType='fade'
            visible={isVisible}
            transparent={true}
            onDismiss={()=>{setisVisible(false)}}

            onRequestClose={()=>{console.log("asdadadad")}}
            
        >
            
            <TouchableOpacity style={{
                flex:1,
                backgroundColor:'rgba(0,0,0,0.3)',
                    justifyContent:'center',
                    alignItems:'center'
                }} activeOpacity={1} >

               
                
                
                <View style={{backgroundColor:'white',width:200,height:200,alignItems:'center',justifyContent:'center'}}>
                <HeaderTitle  title='Modal'/>
                    <Text >Cuerpo de el modal</Text>
                    <Button title='Cerrar' onPress={()=>{setisVisible(false)}}/>
                </View>


            </TouchableOpacity>

        </Modal>
    </View>
  )
}
