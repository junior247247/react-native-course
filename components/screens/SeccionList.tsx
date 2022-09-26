import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../component/HeaderTitle'

interface Casas {
    casa: string;
    data: string[];
}

const data=[
  {
    name:''
  },
  {
    name:'',
    datas:['','']
  }
]

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Thor", "Spiderman","Antman", "Thor", "Spiderman","Antman", "Thor", "Spiderman","Antman", "Thor", "Spiderman","Antman" ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", ]
    }
];

export const SeccionList = () => {
  
  return (
    <View style={{flex:1,margin:20}}>
     
        <SectionList
            sections={casas}
            ListHeaderComponent={()=><HeaderTitle title='Section list' />}
            ListFooterComponent={()=><HeaderTitle title={'Total de casas:'+casas.length}/>}
            renderItem={({item})=><Text>{item}</Text>}
            keyExtractor={(item,index)=>item+index}
            renderSectionHeader={({section})=><HeaderTitle title={section.casa} />}
            renderSectionFooter={({section})=><HeaderTitle title={'Total:'+section.data.length}/>}
            stickySectionHeadersEnabled={true}
            //ItemSeparatorComponent={()=><View style={{width:'100%',height:2,backgroundColor:'black'}}/>}
            SectionSeparatorComponent={()=><View style={{width:'100%',height:2,backgroundColor:'black'}}/>}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}
