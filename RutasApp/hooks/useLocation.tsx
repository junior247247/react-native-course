import { useEffect, useRef, useState } from 'react'
import Geolocation, { GeolocationOptions } from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE,PROVIDER_DEFAULT ,Marker} from 'react-native-maps'
import { check ,PERMISSIONS,PermissionStatus,request} from 'react-native-permissions'

interface Location{
    latitude:number;
    longitude:number;

}

export const useLocation = () => {

    const [hasLocation, setfhasLocation] = useState(false);

        const [routeLines, setrouteLines] = useState<Location[]>([])

        const isMounted=    useRef(true);
    const [initialPosition, setinitialPosition] = useState<Location>({latitude:0,longitude:0})
    const watchId = useRef<Number>();
    const [userLocation, setUserLocation] = useState<Location>({latitude:0,longitude:0})


            const GetCurrentLocation=():Promise<Location>=>{
                return new Promise((rescolve,reject)=>{
                        Geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>  {
                
                           rescolve({
                            latitude,
                            longitude
                           })
                            
                        },
                        
                        (err)=>reject('error'),
                  
                        {enableHighAccuracy:false,maximumAge:3600000});
                    
                })
            }






        const getLocation = async()=>{

            let permision:PermissionStatus;
            permision = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            if(permision=='granted'){

                Geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>  {
        
                    setinitialPosition({latitude:latitude,longitude:longitude});
                    console.log('success')
                    setfhasLocation(true);
                },
                
                (err)=>console.log('error',err),
          
                {enableHighAccuracy:false,maximumAge:3600000});
            }
          
  

        }


        const followUserLocation=()=>{
            watchId.current= Geolocation.watchPosition(({coords})=>{
                console.log(coords);
                const location:Location={
                    latitude:coords.latitude,
                    longitude:coords.longitude
                }

                setUserLocation({longitude:coords.longitude,latitude:coords.latitude})

                setrouteLines(routes=> [...routes,location]);


            },(err)=>console.log(err),{enableHighAccuracy:false,distanceFilter:10})
        }

        const stopFollowUserLocation=()=>{
            if(watchId.current){
                Geolocation.clearWatch(watchId.current);
            }
                
        }

        useEffect(() => {
            isMounted.current=true;
        
          return () => {
            isMounted.current=false;
          }
        }, [])
        


    useEffect(() => {
        if(!isMounted.current)return;
        getLocation();

        GetCurrentLocation().then(location=>{
            
            setrouteLines(routes=> [...routes,location]);
        })
   
    
      
      }, [])


  return{
        hasLocation,
        initialPosition,
        GetCurrentLocation,
        followUserLocation,
        userLocation,
        stopFollowUserLocation,
        routeLines
  }
}
