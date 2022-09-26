import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput, View,Platform, ScrollView, TouchableWithoutFeedback,Keyboard, Text } from 'react-native'
import { CustomSwitch } from '../component/CustomSwitch'
import { HeaderTitle } from '../component/HeaderTitle'
import { PruebaCustomSwitch } from '../component/PruebaCustomSwitch'

export const TextInputScreen = () => {


    const [form, setform] = useState({
        name:'',
        email:'',
        phone:'',
        isSuscribe:false
    })


    const changeText=(valor:any,field:string)=>{
        setform({
            ...form,
            [field]:valor
        })
    
    }
  return (
   <KeyboardAvoidingView 
        behavior={Platform.OS==='ios'?'padding':'height'}
  >

     
                
  

                        <View>

                            <PruebaCustomSwitch onchange={(is)=>{console.log(is)}} />

                                <HeaderTitle title='TextInput'/>
                                <View style={{justifyContent:'space-between',alignContent:'center',flexDirection:'row'}}>
                                    <Text>Subscribete</Text>
                                    <CustomSwitch onChange={(isEnable)=>changeText(isEnable,'isSuscribe')} isOn={false}/>
                                </View>

                                <TextInput style={style.input} 
                                    autoCorrect={false}
                                    placeholder='Ingrese el nombre'
                                    autoCapitalize='words'
                                    onChangeText={text=>changeText(text,'name')}
                                    keyboardAppearance='dark'
                                />
                                <TextInput style={style.input} 
                                    autoCorrect={false}
                                    placeholder={'Ingrese el email'}
                                    autoCapitalize={'none'}
                                    keyboardType='email-address'
                                />
                                    <HeaderTitle title={JSON.stringify(form,null,5)}/>
                                    
                                    <HeaderTitle title={JSON.stringify(form,null,5)}/>
                                
                                <TextInput style={style.input} 
                                    autoCorrect={false}
                                    placeholder='ingrese el phone'
                                    keyboardType='phone-pad'
                                />


                    <View style={{height:20}}></View>
                    </View>
                    

        
    

  

    </KeyboardAvoidingView>
  )
}

const style=StyleSheet.create({
    input:{
        height:50,
   
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.3)',
    marginVertical:20,
    marginHorizontal:10,
    padding:10,
    borderRadius:5

    }
})