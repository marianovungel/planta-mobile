import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StatusBar, FlatList, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import {DataList} from '../config/data';

export default function Home({ navigation }) {
  const [value, setValue] = useState("")

  useEffect(()=>{
    const responseList = DataList
    console.log(responseList)
  }, [])
  

  return (
    <SafeAreaView style={{flex:1, alignItems:'center', backgroundColor:"#fff"}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content"   />
      <View style={{paddingVertical:15}}>
        <Text style={{textAlign:"center", fontWeight:'bold', fontSize:20, color:'#444'}}>Search</Text>
      </View>
      <View style={{flex:1, width:"90%", backgroundColor:"#fff"}}>
        <View style={{ width:"100%", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:10}}>
          <View style={{position:'relative', flexDirection:"row", width:"90%"}}>
            <TextInput
                onChangeText={value=>setValue(value)}
                value={value}
                placeholder="Seach..."
                style={{width:"100%", backgroundColor:"#f4f4f4", paddingLeft:40, paddingVertical:10, borderRadius:5}}
            />
            <FontAwesome name="search" size={20} color="#2f7e33" style={{position:"absolute", left:12, top:13}} />
          </View>
          <FontAwesome5 name="sliders-h" size={24} color="black" />
        </View>
        <View style={{ paddingVertical:20, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <View style={{width:"60%", flexDirection:"row", justifyContent:"flex-start", alignContent:"center", gap:5}}>
            <Text style={{fontWeight:'bold', color:"#777"}}>Shopping</Text>
            {value && (<Text style={{fontWeight:900, color:"#444", fontSize:16}}>"{value}"</Text>)}
          </View>
          <Text style={{fontWeight:'bold', color:"#777"}}>21 Resultados</Text>
        </View>
        <FlatList data={DataList}
          renderItem={({ item })=>(
            <Pressable
              onPress={()=> navigation.navigate("Single", {data: item})}
              key={item.id}
              style={{width:"45%", marginBottom:10, backgroundColor:"#fff"}}>
                <View style={{position:'relative', width:"100%", height:200, padding:0, margin:0, flexDirection:"row", alignItems:"flex-start"}}>
                  <Image
                    style={{ width:"100%", height:200, resizeMode:"center", borderRadius:20}}
                    source={item.img}
                  />
                  {item.like ? (<AntDesign style={{ position:'absolute', right:20, top:30 }} name="heart" size={24} color="#2f7e33" />) : (
                  <AntDesign style={{ position:'absolute', right:20, top:30 }} name="hearto" size={24} color="black" />)}
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <Text style={{fontWeight:'bold', color:"#2f7e33", fontSize:16}}>$ {item.precoAtual},00</Text>
                  <View style={{flexDirection:"row", alignItems:"center", justifyContent:"flex-end", gap:3}}>
                    <AntDesign name="star" size={16} color="#2f7e33" />
                    <Text style={{fontWeight:'bold'}}>{item.estrela}</Text>
                  </View>
                </View>
                <Text style={{textAlign:'left', fontWeight:500, color:"#666"}}>{item.nome}</Text>
                
            </Pressable>
          )} 
          numColumns={2}
          columnWrapperStyle={{ justifyContent:"space-between"}}
          showsVerticalScrollIndicator={false}
        />
      </View>
      
    </SafeAreaView>
  )
}