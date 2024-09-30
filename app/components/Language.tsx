import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Link, Stack } from "expo-router";
import { AntDesign ,Ionicons,SimpleLineIcons,MaterialIcons,FontAwesome6   } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useNavigation } from '@react-navigation/native';
const Language = () => {
  const navigation = useNavigation();
  const Arr=["Mandarin","Hindi","Spanish","French","Arabic","Russian","Indonesia","Vietnamese"]
  return (
   <>
       <Stack.Screen
    options={{
      headerTransparent: false,
      headerTitle: "",
      headerShadowVisible:false,
     
      headerRight: () => (
       <Text style={{ fontSize:20,fontWeight:"bold",marginRight:119 }}>Language</Text>
      
    ),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {navigation.goBack();}}
          style={{
            padding: 10,
            paddingLeft:10,
           flexDirection:"row",
            gap:4
          }}
        >
         
         <AntDesign name="arrowleft" size={28} color="black" />
        </TouchableOpacity>
      ),
    }}
  />
   

<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

<View>
  <Text style={{ fontSize:20,fontWeight:"bold",marginTop:20 }}>Suggested</Text>

<View style={{ flexDirection:"row",justifyContent:"space-between",alignItems:"center" }}>
  <Text style={{ fontSize:20,marginVertical:20 }}>English (US)</Text>
  <Button title="Button"/>
</View>
<View style={{ flexDirection:"row",justifyContent:"space-between",alignItems:"center" }}>
  <Text style={{ fontSize:20,marginVertical:20 }}>English (UK)</Text>
  <Button title="Button"/>
</View>
</View>
<View style={{ height:2,width:300,backgroundColor:"#EEEEEE" }} />
<Text style={{ fontSize:20,fontWeight:"bold",marginTop:20 }}>Others</Text>
{Arr.map((item,i)=>{
  return(
    <View key={i} style={{ flexDirection:"row",justifyContent:"space-between",alignItems:"center" }}>
  <Text style={{ fontSize:18,marginVertical:20 }}>{item} </Text>
  <Button title="Button"/>
</View>
  )
})}


</ScrollView>

   
   </>
  )
}

export default Language
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex:1,
   paddingHorizontal:30
  },
  headingTxt: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
    height:50
  },
  filterBtn: {
    backgroundColor: "#09D5FF",
    padding: 10,
    borderRadius: 5,
    marginLeft: 20,
    height:50
  },
})