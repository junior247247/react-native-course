import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { ThemeContet } from '../context/ThemeContext';
import { AlertScreen } from './AlertScreen';
import { Animation101Scren } from './Animation101Scren';
import { Animation202Screen } from './Animation202Screen';
import { ChangeThemeScreen } from './ChangeThemeScreen';
import { HomeScreen } from './HomeScreen';
import { InfiniteScrolScreen } from './InfiniteScrolScreen';
import { ModalScreen } from './ModalScreen';
import { PullToRefreshScreen } from './PullToRefreshScreen';
import { SeccionList } from './SeccionList';
import { SlideScreen } from './SlideScreen';
import { SwitchScreen } from './SwitchScreen';
import { TextInputScreen } from './TextInputScreen';

const Stack=createStackNavigator();


export const StackNavigation = () => {

  const {theme} = useContext(ThemeContet);

  return (
    <NavigationContainer theme={theme}>


    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{animationEnabled:true,headerShown:false,/*cardStyle:{backgroundColor:'white'}*/}}>
        <Stack.Screen name='Animation101Scren' component={Animation101Scren}/>
        <Stack.Screen name='Animation202Screen' component={Animation202Screen}/>
        <Stack.Screen name='HomeScreen'  component={HomeScreen}/>
        <Stack.Screen name='SwitchScreen' component={SwitchScreen}/>
        <Stack.Screen name='AlertScreen' component={AlertScreen}/>
        <Stack.Screen name='TextInputScreen' component={TextInputScreen}/>
        <Stack.Screen name='PullToRefreshScreen' component={PullToRefreshScreen}/>
        <Stack.Screen name='SeccionList' component={SeccionList}/>
        <Stack.Screen name='ModalScreen' component={ModalScreen}/>
        <Stack.Screen name='InfiniteScrolScreen' component={InfiniteScrolScreen}/>
        <Stack.Screen name='SlideScreen' component={SlideScreen}/>
        <Stack.Screen name='ChangeThemeScreen' component={ChangeThemeScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}
