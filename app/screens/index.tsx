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
import { Ionicons,AntDesign ,MaterialCommunityIcons   } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Card from "../components/Card";
import Listings from "../components/Listings";


const Page = () => {
 
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible:false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 30 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{ width: 40, height: 40, borderRadius: 50 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{padding: 10}}
            >
             <Text >مرحبا</Text>  
             <Text style={{ paddingRight:12,fontSize:18,fontWeight:"bold" }}>محمد شو شنو</Text>
        
            </TouchableOpacity>
          ),
        }}
      />
      <View  style={styles.container}>
        <ScrollView  showsVerticalScrollIndicator={false}>
         

          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons
                name="search"
                size={18}
                style={{ marginRight: 5 }}
                color={Colors.black}
              />
              <TextInput placeholder="بحث...                                                   " />
            </View>

            <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
              <Ionicons name="options" size={28} color={Colors.white} />
            </TouchableOpacity>
          </View>
<Card/>

<Text style={{ fontSize:19,fontWeight:"bold",marginVertical:15}}>محاظرات غدا</Text>
          <Listings />

          <Text style={{ fontSize:19,fontWeight:"bold",marginVertical:15}}> الاشعارات</Text>
<TouchableOpacity style={{ flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10,paddingVertical:6,width:"95%",height:63,backgroundColor:"white",marginHorizontal:9,borderRadius:10 ,marginVertical:9}}>

<View style={{ width:40,height:45,backgroundColor:"#FFA841",borderBottomRightRadius:15,borderTopLeftRadius:15,marginVertical:3 }}>
<MaterialCommunityIcons style={{ left:4,top:4 }} name="room-service" size={32} color="white" />
</View>
<View>
  <Text style={{ fontSize:18,fontWeight:"bold",marginBottom:5}}>الأدارة</Text>
  <Text>عطلة يوم 24/05/17</Text>
</View>


</TouchableOpacity>


<TouchableOpacity style={{ flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10,paddingVertical:6,width:"95%",height:63,backgroundColor:"white",marginHorizontal:9,borderRadius:10 }}>

<View style={{ width:40,height:45,backgroundColor:"red",borderBottomRightRadius:15,borderTopLeftRadius:15,marginVertical:3 }}>
<MaterialCommunityIcons style={{ left:4,top:4 }} name="room-service" size={32} color="white" /> 
</View>
<View>
  <Text style={{ fontSize:18,fontWeight:"bold",marginBottom:5}}>الأدارة</Text>
  <Text> طرد الطالب غياث لاسباب اخلاقية </Text>
</View>


</TouchableOpacity>




        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
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
});
