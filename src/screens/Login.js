import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import api from '../servises/api'
import axios from 'axios'

export default function Login({navigation}) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  console.log([email, password])

  const hendleLogin = async ()=>{
    try {
        const NewResult = await axios.post("http://localhost:8000/",{
          email:"ma@gamil.com",
          senha:"minhakjdnlsk"
        })
        console.log(NewResult)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <ImageBackground
        source={require('../../assets/26.jpg')}
        style={{ width: '100%', height: '100%', resizeMode:"center" }}
        resizeMode="cover"
      >
        <Text style={{marginTop: 160, marginBottom:15, fontSize:45, fontWeight:'bold', color:"#0d3910", textAlign:'center'}}>Login</Text>
        <View style={{width:"100%", flexDirection:"row", justifyContent:"center"}}>
          <View style={{width:"80%", backgroundColor:"#ffffff47", borderRadius:10, padding:15, alignItems:'center'}}>
            <Text style={{marginTop:10, fontSize:19, width:"90%", textAlign: 'left'}}>Email</Text>
            <TextInput 
              onChangeText={(value)=>setEmail(value)}
              style={{width:"90%", backgroundColor:"#fff", paddingVertical:10, paddingHorizontal: 10, borderRadius:10, fontSize:16, marginVertical:10}} 
              value={email} 
              placeholder='Digite seu Email...'/>
            <Text style={{fontSize:19, width:"90%", textAlign: 'left'}}>Senha</Text>
            <TextInput 
              onChangeText={(value)=>setPassword(value)}
              style={{width:"90%", backgroundColor:"#fff", paddingVertical:10, paddingHorizontal: 10, borderRadius:10, fontSize:16, marginVertical:10}}
              value={password}
              placeholder='Digite sua Senha...'/>
              <Text style={{width:"90%", textAlign: "right", color:"#0d3910"}}>Esqueceu a Senha?</Text>
            <TouchableOpacity onPress={hendleLogin} style={{width:"90%", marginTop:10, backgroundColor: "#2f7e33", paddingVertical:15, borderRadius:10}}>
              <Text style={{textAlign: "center", color:"#fff", fontWeight:"bold", fontSize:20}}>Login</Text>
            </TouchableOpacity>

            <View style={{marginTop:15, flexDirection: "row", justifyContent:"center", gap:5}}>
              <Text style={{ color: "#0d3910"}}>Não tem uma conta?</Text>
              <TouchableOpacity
                onPress={()=> navigation.navigate("Register")} 
              >
                <Text style={{fontWeight:"bold", color: "#fff"}}>Cadastrar-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground
      >
    </SafeAreaView>
  )
}