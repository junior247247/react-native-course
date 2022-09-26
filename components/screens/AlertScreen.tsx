import React from 'react'
import { Alert, Button, ToastAndroid, View } from 'react-native'
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../component/HeaderTitle'

export const AlertScreen = () => {

        const showAlert=()=>{
            Alert.alert('title','message',
            [
                
                {
                    text:'ok',
                    onPress:()=>{ToastAndroid.show('ok',ToastAndroid.LONG)},
                    style:'default'
                },
                {
                    text:'Cancell',
                    style:'default'
                }
            
            ]

            ,{
                cancelable:false,
                
            
            }

            )
        }


        const showPromp=()=>{
            prompt(
                'Enter password',
                'Enter your password to claim your $1.5B in lottery winnings',

                [
                 {text: 'Cancel', onPress: () => console.log(''), style: 'cancel'},

                 {text: 'OK', onPress: (text) => console.log( text)},
                

                ],

                {
                    type: 'plain-text',
                    cancelable: false,
                    defaultValue: 'test',
                    placeholder: 'placeholder'
                }
            );
        }




  return (
    <View>
        <HeaderTitle title='Alerts'/>
        <Button title='show alert' onPress={()=>{showPromp()}}/>
    </View>
  )
}
