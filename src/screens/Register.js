import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

export default function Register({navigation}) {
  return (
    <SafeAreaView style={{flex:1}}>
      <ImageBackground
        source={require('../../assets/26.jpg')}
        style={{ width: '100%', height: '100%', resizeMode:"center" }}
        resizeMode="cover"
      >
        <Text style={{marginTop: 160, marginBottom:20, fontSize:40, fontWeight:'bold', color:"#f5f5f5", textAlign:'center'}}>Registar</Text>
        <View style={{width:"100%", flexDirection:"row", justifyContent:"center"}}>
          <View style={{width:"85%", backgroundColor:"#ffffff47", borderRadius:10, padding:15, alignItems:'center'}}>
            <Text style={{marginTop:10, fontSize:19, width:"90%", textAlign: 'left'}}>Nome</Text>
            <TextInput 
              style={{width:"90%", backgroundColor:"#fff", paddingVertical:10, paddingHorizontal: 10, borderRadius:10, fontSize:16, marginVertical:10}} 
              value='Branca Zua' 
              placeholder='Digite seu Email...'/>
            <Text style={{marginTop:10, fontSize:19, width:"90%", textAlign: 'left'}}>Email</Text>
            <TextInput 
              style={{width:"90%", backgroundColor:"#fff", paddingVertical:10, paddingHorizontal: 10, borderRadius:10, fontSize:16, marginVertical:10}} 
              value='brancazua0@gmail.com' 
              placeholder='Digite seu Email...'/>
            <Text style={{fontSize:19, width:"90%", textAlign: 'left'}}>Senha</Text>
            <TextInput 
              style={{width:"90%", backgroundColor:"#fff", paddingVertical:10, paddingHorizontal: 10, borderRadius:10, fontSize:16, marginVertical:10}}
              value='123456' 
              placeholder='Digite sua Senha...'/>
              <Text style={{width:"90%", textAlign: "right", color:"#0d3910"}}>Esqueceu a Senha?</Text>
            <TouchableOpacity style={{width:"90%", marginTop:10, backgroundColor: "#2f7e33", paddingVertical:15, borderRadius:10}}>
              <Text style={{textAlign: "center", color:"#fff", fontWeight:"bold", fontSize:20}}>Registrar-se</Text>
            </TouchableOpacity>

            <View style={{marginTop:15, flexDirection: "row", justifyContent:"center", gap:5}}>
              <Text style={{ color: "#0d3910"}}>Não tem uma conta?</Text>
              <TouchableOpacity
                onPress={()=> navigation.navigate("Login")} 
              >
                <Text style={{fontWeight:"bold", color: "#000"}}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground
      >
    </SafeAreaView>
  )
}