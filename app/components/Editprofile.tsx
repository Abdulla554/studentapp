import {
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
import {Feather  , AntDesign ,Ionicons,SimpleLineIcons,MaterialIcons,FontAwesome ,FontAwesome6   } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
const Editprofile = () => {
  const navigation = useNavigation();
  return (
    <>

    <Stack.Screen
    options={{
      headerTransparent: false,
      headerTitle: "",
      headerShadowVisible:false,
     
      headerRight: () => (
       <Text style={{ fontSize:20,fontWeight:"bold",marginRight:110 }}>Edit profile</Text>
      
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
  <View style={styles.container}>



  <View style={{margin:"auto", width:300,height:55,borderRadius:10,backgroundColor:"#F3F8FF" ,borderColor:"#9E9E9E",borderWidth:1,marginTop:25,marginBottom:10}}>
  <TextInput style={{ marginTop:11,backgroundColor:"#F3F8FF" ,paddingLeft:20,width:150}} placeholder="Full name"/>
</View>



<View style={{margin:"auto", width:300,height:55,borderRadius:10,marginVertical:10,backgroundColor:"#F3F8FF" ,borderColor:"#9E9E9E",borderWidth:1}}>
  <TextInput style={{ marginTop:11,backgroundColor:"#F3F8FF" ,paddingLeft:20,width:150}} placeholder="Nick name"/>
</View>



<View style={{margin:"auto", width:300,height:55,borderRadius:10,marginVertical:10,backgroundColor:"#F3F8FF" ,borderColor:"#9E9E9E",borderWidth:1}}>
  <TextInput style={{ marginTop:11,backgroundColor:"#F3F8FF" ,paddingLeft:20,width:150}} placeholder="Label"/>
</View>




<View style={{margin:"auto", width:300,height:55,borderRadius:10,marginVertical:10,backgroundColor:"#F3F8FF" ,borderColor:"#9E9E9E",borderWidth:1,flexDirection:"row",alignItems:"center"}}>
<FontAwesome6 style={{ paddingLeft:14 }} name="flag-usa" size={24} color="black" />
  <TextInput style={{ marginTop:1,backgroundColor:"#F3F8FF" ,paddingLeft:5,width:150}} placeholder="Phone number"/>
</View>


<View style={{ flexDirection:"row",gap:18,left:30 }}>
  {/* ,alignItems:"center",margin:"auto" ,gap:18 */}

<View style={{ height:55,width:140,backgroundColor:"#F3F8FF",borderRadius:10,marginVertical:10 ,borderColor:"#9E9E9E",borderWidth:1 }}>
<TextInput style={{ marginTop:11,backgroundColor:"#F3F8FF" ,paddingLeft:20}} placeholder="Country"/>
</View>



<View style={{ height:55,width:140,backgroundColor:"#F3F8FF",borderRadius:10,marginVertical:10 ,borderColor:"#9E9E9E",borderWidth:1 }}>
<TextInput style={{ marginTop:11,backgroundColor:"#F3F8FF" ,paddingLeft:20}} placeholder="Genre"/>
</View>




</View>


<View style={{margin:"auto", width:300,height:55,borderRadius:10,marginVertical:10,backgroundColor:"#F3F8FF" ,borderColor:"#9E9E9E",borderWidth:1}}>
  <TextInput style={{ marginTop:11,backgroundColor:"#F3F8FF" ,paddingLeft:20,width:150}} placeholder="Address"/>
</View>




<TouchableOpacity style={{margin:"auto", width:300,height:50,borderRadius:10,marginVertical:10,backgroundColor:"#1573FE" }}>
  <Text style={{ margin:"auto",fontSize:20,color:"white" }}>SUBMIT</Text>
</TouchableOpacity>
  </View>
  </>)
}

export default Editprofile


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex:1
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