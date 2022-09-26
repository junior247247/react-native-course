import React, { useRef, useState } from 'react'
import { Dimensions, Image, ImageSourcePropType, Text, TouchableOpacity, View,Animated } from 'react-native'
import Carousel,{Pagination} from 'react-native-snap-carousel';
import { HeaderTitle } from '../component/HeaderTitle'
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const {width,height} = Dimensions.get('window');


interface Props extends StackScreenProps<any,any>{};

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../src/assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../src/assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../src/assets/slide-3.png')
    },
]

export const SlideScreen = ({navigation}:Props) => {

        const [activeIndex, setactiveIndex]= useState(0);
        const isVisible = useRef(false);
        const opcatity= useRef(new Animated.Value(0)).current;

            const fadeInd=()=>{
                Animated.timing(opcatity,{
                        duration:500,
                        toValue:1,
                        useNativeDriver:true

                }).start();
            }

            const fadeOut=()=>{
                Animated.timing(opcatity,{
                    toValue:0,
                    duration:500,
                    useNativeDriver:true
                }).start();
            }




    const renderItem=(item:Slide)=>{
            return(
            <View style={{flex:1,borderRadius:5,padding:40,justifyContent:'center'}}>

                    <Image 
                        source={item.img}
                        style={{width:350,height:400,resizeMode:'center'}}
                    />
                    <Text style={{fontSize:30,fontWeight:'bold',color:'#5856D6'}}>{item.title}</Text>
                    <Text style={{fontSize:16}}>{item.desc}</Text>
             </View>
            )
    }

  return (
    <View style={{flex:1}}>
       

        <Carousel 
            data={items}
            renderItem={({item})=>renderItem(item)}
            sliderWidth={width}
            sliderHeight={height}
            itemWidth={width}
            itemHeight={height}
            //windowSize={100}
            layout={'default'}
            onSnapToItem={(index)=>{
                setactiveIndex(index);
                if (index==2){
                    isVisible.current=true;
                    fadeInd();
                }else{
                    fadeOut();
                    isVisible.current=false;
                }
          
            }}
        />

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Pagination
                dotsLength={items.length}
                activeDotIndex={activeIndex}
                dotStyle={{
                    width:10,
                    height:10,
                    borderRadius:10,
                    backgroundColor:'#5856D6'
                }}
        
        />
        <Animated.View style={{opacity:opcatity}}>
            <TouchableOpacity activeOpacity={0.5}  onPress={()=>{
                if(isVisible.current){
                    console.log('Click');
                }
            }} style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,alignItems:'center',backgroundColor:'#5856D6',width:150,height:40,borderRadius:10,marginRight:10}}>
                <Text style={{fontSize:20,color:'white'}}>Entrar</Text>
                <Icon name='chevron-forward-outline' size={30} color={'white'} />       
            </TouchableOpacity>
        </Animated.View>
       

        </View>

   
    </View>
  )
}
