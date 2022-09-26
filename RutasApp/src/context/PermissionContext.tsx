import React,{ createContext, useState,useEffect } from "react";
import { PermissionStatus, request,PERMISSIONS, check,openSettings } from "react-native-permissions";
import {Platform,AppState} from 'react-native'

export interface PermisionState{
    locationStatus:PermissionStatus;
}

const PermisionInit:PermisionState={
  locationStatus:'unavailable'
}

export interface Props{
    permission:PermisionState
    preguntarUbicaciónPermiso:()=>void;
    verificarPermisodeUbicación:()=>void;

}

export const PermisionContext= createContext({}as Props);



export const PermissionContext = ({children}:any) => {

    const [permission, setPermission] = useState(PermisionInit);


    useEffect(() => {
      verificarPermisodeUbicación();
      AppState.addEventListener('change',state=>{
          if(state!=='active')return;
          verificarPermisodeUbicación();
      })

    
    
     
    }, [])
    


     const preguntarUbicaciónPermiso= async()=>{
          let permisionStatus:PermissionStatus;
          if(Platform.OS=='ios'){
          //  permisionStatus= await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
          permisionStatus= await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
          }else{
            permisionStatus= await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
          }
          if(permisionStatus=='blocked'){
            openSettings();
          }
          setPermission({...permission,locationStatus:permisionStatus})

        }


        const verificarPermisodeUbicación= async()=>{
              let permisionStatus:PermissionStatus;
              if(Platform.OS=='ios'){
              //  permisionStatus= await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
                   permisionStatus= await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
              }else{
                permisionStatus= await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
              }
    
              setPermission({...permission,locationStatus:permisionStatus})

        }
        
         
    

  return (
    <PermisionContext.Provider
     value={
      {
        permission,
        preguntarUbicaciónPermiso,
        verificarPermisodeUbicación,
      }
     }
    >

        {children}

    </PermisionContext.Provider>
  )
}
