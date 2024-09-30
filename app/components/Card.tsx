import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
import React from 'react'
import Colors from "@/constants/Colors";


const Card = () => {
  return (
    <View style={styles.item}>



 <View style={{marginLeft:10, marginTop:24, height:140,width:140,borderColor:"red",borderRadius:100,borderWidth:5 }}>
 <Text style={{ marginTop:38,marginLeft:45,fontSize:40,fontWeight:"bold" }}>74</Text>
    <Text style={{ marginLeft:92,fontSize:17,fontWeight:"bold",marginTop:-30 }}>%</Text>
 </View>






 <View style={{marginTop:20, flexDirection:"row" ,gap:5,marginRight:8}}>
  

<View>
    <Text style={{ fontSize:15,fontWeight:"bold",marginTop:-3,marginRight:9 }}>النشاط اليومي</Text>
    <Text style={{ fontSize:15,fontWeight:"bold",marginTop:25,marginRight:9 }}>الواجبات اليومية</Text>
    <Text style={{ fontSize:15,fontWeight:"bold",marginTop:27,marginRight:9 }}>الحظور</Text>
    <Text style={{ fontSize:15,fontWeight:"bold",marginTop:27,marginRight:9 }}>السلوك</Text>
</View>

<View>

<View style={{ backgroundColor:"#09D5FF",width:14,height:14,borderRadius:50 }}/>
<View style={{ backgroundColor:"#E5E5E5",width:2,height:33,marginLeft:6 }}/>
<View style={{ backgroundColor:"#5AF3B3",width:14,height:14,borderRadius:50 }}/>
<View style={{ backgroundColor:"#E5E5E5",width:2,height:33,marginLeft:6 }}/>
<View style={{ backgroundColor:"#D55AF3",width:14,height:14,borderRadius:50 }}/>
<View style={{ backgroundColor:"#E5E5E5",width:2,height:33,marginLeft:6 }}/>
<View style={{ backgroundColor:"#FF7F09",width:14,height:14,borderRadius:50 }}/>
</View>


 </View>


    </View>
  )
}

export default Card


const styles = StyleSheet.create({
    item: {
      backgroundColor: Colors.white,
      borderRadius: 15,
      marginRight: 20,
      width: "100%",
      height:195,
      flexDirection:"row",
      justifyContent:"space-between",
    //   padding:10
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 10,
      marginBottom: 30,
    },
    bookmark: {
      position: "absolute",
      top: 185,
      right: 30,
      backgroundColor: Colors.primaryColor,
      padding: 10,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: Colors.white,
    },
    itemTxt: {
      fontSize: 16,
      fontWeight: "600",
      color: Colors.black,
      marginBottom: 10,
    },
    itemLocationTxt: {
      fontSize: 12,
      marginLeft: 5,
    },
    itemPriceTxt: {
      fontSize: 12,
      fontWeight: "600",
      color: Colors.primaryColor,
    },
  });
  