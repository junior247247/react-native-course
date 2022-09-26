import React, { useEffect ,useRef, useState} from 'react'
import { StyleSheet, Text, View ,Animated} from 'react-native'
import MapView, { PROVIDER_GOOGLE,PROVIDER_DEFAULT ,Marker,Polyline} from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import { useLocation } from '../../hooks/useLocation';
import { LoadingScreen } from './LoadingScreen';
import { FabBotton } from './FabBotton';



export const MapScreen = () => {


    const {hasLocation,
      initialPosition,
      GetCurrentLocation,
      followUserLocation,
      userLocation,stopFollowUserLocation,routeLines} = useLocation();

      const [showPolyLine, setshowPolyLine] = useState(true);


    const opacity = useRef(new Animated.Value(0)).current;
     const posictionX= useRef(new Animated.Value(0)).current
      const mapViewRef = useRef<MapView>();
       
      const following = useRef(true);
  




      useEffect(() => {
        if(!following.current)return;
        
        const {latitude,longitude}= userLocation;


        mapViewRef.current?.animateCamera({
          center:{
            latitude:latitude,
            longitude:longitude
          }
          ,
          
        
        })
       
      }, [userLocation])
      

  //max valiu 370

  const FadeOutPosition=()=>{
    Animated.timing(posictionX,{
      toValue:0,
      useNativeDriver:true,
      duration:3000
    }).start(()=>{FadeInPosition()});
  }


    const FadeInPosition=()=>{
      Animated.timing(posictionX,{
        toValue:370,
        useNativeDriver:true,
        duration:3000
      }).start(()=>{FadeOutPosition()});
    }

        const centerPosicion= async()=>{

          const {latitude,longitude}= await GetCurrentLocation();
            following.current=true;

          mapViewRef.current?.animateCamera({
            center:{
              latitude:latitude,
              longitude:longitude
            }
            ,
            zoom:20
          
          })
    
        }

      const fadeOut=()=>{
        Animated.timing(opacity,{
          useNativeDriver:true,
          duration:1000,
          toValue:0
        }).start(fadeIn);
      }

      

      const fadeIn=()=>{

        Animated.timing(opacity,{
          useNativeDriver:true,
          toValue:1,
          duration:1000,
      
        }).start(()=>{fadeOut()});
    
      }


      useEffect(() => {
        fadeIn();
        FadeInPosition();
        followUserLocation();


        return ()=>{

          stopFollowUserLocation()

        }
        
      }, [])
      
    
    if(!hasLocation){
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
           
            <Animated.Text style={{transform:[{translateX:posictionX}],opacity:opacity,fontSize:40,color:'white',fontWeight:'bold'}}>Cargando mapa...</Animated.Text>
        </View>
      )
    }
     
    
    
    
    
  return (
    <View style={{flex:1}}>
    
            <MapView
              onTouchStart={()=>following.current=false}

              ref={(el)=>mapViewRef.current=el!}
              showsMyLocationButton={false}
              showsUserLocation
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={{...StyleSheet.absoluteFillObject}}
              region={{
              latitude: initialPosition.latitude,
              longitude: initialPosition.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
              
            }}
          >
           { /*<Marker
            image={require('../assets/custom-marker.png')}
              title='titulo'
              coordinate={{
                latitude:37.78825,
                longitude:-122.4324
              }}
              description={'Esto es un marcador'}
            /> */}
        <Polyline coordinates={routeLines} strokeColor={'black'} strokeWidth={3}/>

          </MapView>

          <FabBotton iconName='' style={{position:'absolute',bottom:20,right:10}} onPress={centerPosicion}/>
      
    </View>
  )
}
