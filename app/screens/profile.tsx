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
import { Link, Stack } from "expo-router";
import { Ionicons,SimpleLineIcons,MaterialIcons,FontAwesome6   } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
const profile = () => {
  return (
    <ScrollView style={styles.container}>
     {/* <StatusBar style="dark" /> */}
        <Stack.Screen
        options={{
          headerTransparent: true,
          headerShadowVisible:false,
          headerTitle: "",
          headerRight: () => (
            <View style={{ flexDirection:"row" }}>
        
            <TouchableOpacity
            onPress={() => {}}
            style={{
             paddingRight:14,
            
            }}
          >

            <Ionicons name="timer-outline" size={27} color="black" />
          

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
             paddingRight:14,
            }}
          >

            
            <SimpleLineIcons name="options-vertical" size={25} color={Colors.black} />

          </TouchableOpacity>
          </View>),
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
             
              <Ionicons name="notifications-outline" size={25} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />

<View style={{marginLeft:-15, backgroundColor:"#EBF0F0" ,height:260,width:380,borderBottomStartRadius:150,borderBottomEndRadius:130}}>

</View>

<View style={{ alignItems:"center" }}>



<Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{ width: 120, height: 120, borderRadius: 100,marginTop:-70 ,marginBottom:8}}
              />


<Text style={{ fontSize:30,fontWeight:"bold" }}>
Puerto Rico
</Text>

<Text style={{ fontSize:15,fontWeight:"bold",marginTop:10 }}>
youremail@domain.com | +01 234 567 89
</Text>
</View>






{/* 1111111111111111 */}

<View style={{paddingVertical:10,paddingHorizontal:20, borderRadius:15,marginTop:30, width:300,height:170,backgroundColor:"white",marginHorizontal:"auto" }}>


{/* onPress={(()=>{navigation.navigate('category')})} */}
<Link href={"/Components/Editprofile"} asChild>


<TouchableOpacity   style={{ flexDirection:"row" ,alignItems:"center",gap:6,paddingBottom:25,paddingTop:5}}>
<MaterialIcons name="business" size={25} color="black" />
  <Text style={{ fontSize:16,fontWeight:"bold" }}>Edit profile information</Text>
</TouchableOpacity>

</Link>

<Link href={"/Components/Notifications"} asChild>
<TouchableOpacity style={{ flexDirection:"row" ,alignItems:"center",justifyContent:"space-between",gap:6,paddingBottom:25}}>

<View style={{ flexDirection:"row",gap:6 }}>
<Ionicons name="notifications-outline" size={24} color="black" />
<Text style={{ fontSize:16,fontWeight:"bold" }}>Notifications</Text> 
</View>


<View>
  <Text style={{ fontSize:16,color:"#1573FE" }}>ON</Text>
  </View>
</TouchableOpacity>
</Link>

<Link href={"/Components/Language"} asChild>
<TouchableOpacity style={{ flexDirection:"row" ,alignItems:"center",justifyContent:"space-between",gap:6,paddingBottom:25}}>

<View style={{ flexDirection:"row",gap:6 }}>
<FontAwesome6 name="language" size={24} color="black" />
  <Text style={{ fontSize:16,fontWeight:"bold" }}>Language</Text>
</View>


<View>
  <Text style={{ fontSize:16,color:"#1573FE" }}>English</Text>
  </View>
</TouchableOpacity>
</Link>



</View>











<View style={{paddingVertical:10,paddingHorizontal:20, borderRadius:15,marginTop:30, width:300,height:110,backgroundColor:"white",marginHorizontal:"auto" }}>


<Link href={"/Components/Chat"} asChild>
<TouchableOpacity style={{ flexDirection:"row" ,alignItems:"center",gap:6,paddingBottom:25,paddingTop:5}}>
<MaterialIcons name="business" size={25} color="black" />
  <Text style={{ fontSize:16 }}>Security</Text>
</TouchableOpacity>
</Link>


<TouchableOpacity style={{ flexDirection:"row" ,alignItems:"center",justifyContent:"space-between",gap:6,paddingBottom:25}}>

<View style={{ flexDirection:"row",gap:6 }}>
<Ionicons name="notifications-outline" size={24} color="black" />
<Text style={{ fontSize:16,fontWeight:"bold" }}>Theme</Text> 
</View>


<View>
  <Text style={{ fontSize:16,color:"#1573FE" }}>Light mode</Text>
  </View>
</TouchableOpacity>

</View>










<View style={{paddingVertical:10,paddingHorizontal:20, borderRadius:15,marginTop:30, width:300,height:170,backgroundColor:"white",marginHorizontal:"auto" }}>



<TouchableOpacity style={{ flexDirection:"row" ,alignItems:"center",gap:6,paddingBottom:25,paddingTop:5}}>
<MaterialIcons name="business" size={25} color="black" />
  <Text style={{ fontSize:16,fontWeight:"bold" }}>Help & Support</Text>
</TouchableOpacity>

<TouchableOpacity style={{ flexDirection:"row" ,alignItems:"center",gap:6,paddingBottom:25,paddingTop:5}}>
<MaterialIcons name="business" size={25} color="black" />
  <Text style={{ fontSize:16,fontWeight:"bold" }}>Contact us</Text>
</TouchableOpacity>
<Link href={"/Components/PrivacyPolicy"} asChild>


<TouchableOpacity style={{ flexDirection:"row" ,alignItems:"center",gap:6,paddingBottom:25,paddingTop:5}}>
<MaterialIcons name="business" size={25} color="black" />
  <Text style={{ fontSize:16,fontWeight:"bold" }}>Privacy policy</Text>
</TouchableOpacity>
</Link>








</View>










    </ScrollView>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
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
})