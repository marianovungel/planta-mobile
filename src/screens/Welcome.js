import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Welcome({navigation}) {

  return (
    <SafeAreaView style={{flex:1, 
    // backgroundColor:"#5DB261", 
    alignItems: "center"}}>
      <Image style={{ width: 150, height:150, borderRadius: 20, marginTop: 290}} source={require("../../assets/P.png")} />
      {/* <Text style={{marginTop: 60, color:"#0d3910", fontWeight:"bold", fontSize:30}}>Plantas, Beleza e Vida</Text>
      <Text style={{width:"70%", color:"#0d3910", fontSize:18, textAlign:"center", marginTop:2}}>Junte a comunidade dos que cuidam do meio ambiente</Text> */}
      <TouchableOpacity
        onPress={()=> navigation.navigate("Login")} 
        style={{backgroundColor: "#2f7e33", paddingVertical:17, paddingHorizontal:30, width:"90%", borderRadius: 10, marginTop:280}}>
        <Text style={{color:"#fff", fontWeight:"bold", fontSize:20, textAlign:"center"}}>Login</Text>
      </TouchableOpacity>
      <View style={{marginTop:15, flexDirection: "row", justifyContent:"center", gap:5}}>
        <Text style={{ color: "#0d3910"}}>Não tem uma conta?</Text>
        <TouchableOpacity
          onPress={()=> navigation.navigate("Register")} 
        >
          <Text style={{fontWeight:"bold", color: "#666"}}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}