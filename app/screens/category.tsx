import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";

const Page = () => {
  const headerHeight = useHeaderHeight();
  const Arr=[
    {color:"#FF4141",tital:"رياضيات"},
    {color:"#386BF6",tital:"اسلامية"},
    {color:"#FF53EE",tital:"  احياء"},
    {color:"#F3B960",tital:"  فيزياء"},
    {color:"#9DB2CE",tital:"  كيمياء"},
    {color:"green",tital:" انكليزي"}
  ]
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
   <Stack.Screen
        options={{
          headerShadowVisible:false,
          headerTitle: "",
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
           <Text style={styles.texhed}>التحضيرات</Text>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                padding: 10,
                paddingLeft:20,
               flexDirection:"row",
                gap:4
              }}
            >
             
              <Ionicons name="notifications" size={25} color={Colors.Sound} />
              <Text style={{fontWeight:"bold" ,fontSize:17 }}>23</Text>
            </TouchableOpacity>
          ),
        }}
      />
   
    <View style={styles.container}>
       <Text style={{ fontSize:18,fontWeight:"bold",marginLeft:260 }}>القادمة</Text>
   
       {Arr.map((item,index)=>{
        return(
          <TouchableOpacity key={index} style={styles.box}>

          <View style={styles.box1} >
            <View style={{ backgroundColor:item.color,width:60,borderTopLeftRadius:20,borderBottomRightRadius:20 }}>
            <Text style={{ paddingHorizontal:8,paddingVertical:15,fontSize:13,color:"white",fontWeight:"bold" }}  >{item.tital}</Text>
            </View>
          
          
            <Text style={{ padding:15,fontSize:15,fontWeight:"bold" }}>التحضير</Text>
          </View>
          
          <View style={{    flexDirection: "row",justifyContent:"space-between",paddingTop:15,paddingHorizontal:5 }}>
            <Text>أ.محمد الكواد</Text>
            <Text>من صفحة 50 الى 30 الشاعر الكواد</Text>
          </View>
          
          
          
             </TouchableOpacity>
        )
      })}
   
 
    </View>
    </ScrollView>
    
  )
}

export default Page

const styles = StyleSheet.create({
  container:{
alignItems:"center",
paddingTop: 40,
backgroundColor: Colors.bgColor,
  },
  texhed:{
fontSize:22,
fontWeight:"bold",
marginRight:13
  },
  box:{
    backgroundColor:"white",
    width:"85%",
    height:100,
    marginTop:10,
    borderRadius:20,
   marginBottom:20
  }
  ,
  box1:{
    flexDirection: "row",
    justifyContent:"space-between",
  }
})
