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
  import {Feather  , AntDesign ,Ionicons,SimpleLineIcons,MaterialIcons,FontAwesome   } from "@expo/vector-icons";
  import Colors from "@/constants/Colors";
  import { useNavigation } from '@react-navigation/native';
  import { useRoute } from '@react-navigation/native';
  const Chat = () => {
    const navigation = useNavigation();
    return (
      <>
  
      <Stack.Screen
      options={{
        headerTransparent: false,
        headerTitle: "",
        headerShadowVisible:false,
       
        headerRight: () => (
          <View style={{ flexDirection:"row" ,alignItems:"center",gap:20,marginRight:6}}>


           <TouchableOpacity>
            <Feather name="volume-2" size={26} color="black" />
            </TouchableOpacity>
          <TouchableOpacity>
          <AntDesign name="upload" size={24} color="black" />
          </TouchableOpacity>
         
          



          </View>),
        headerLeft: () => (
          <>
          <TouchableOpacity
            onPress={() => {navigation.goBack();}}
            style={{
              padding: 10,
              paddingLeft:6,
             flexDirection:"row",
              gap:4
            }}
          >
           
           <AntDesign name="arrowleft" size={28} color="black" />
          </TouchableOpacity>

          <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{ width: 40, height: 40, borderRadius: 100,marginHorizontal:10}}
              />


          <View>
            <Text style={{color:"#3369FF", fontSize:19,fontWeight:"bold" }}>ChatGPT</Text>
            <View style={{ flexDirection:"row",alignItems:"center",gap:5,marginTop:3 }}>
              <View style={{ backgroundColor:"#3ABF38",width:6,height:6,borderRadius:100}}/>
            <Text style={{ color:"#3ABF38" }} >Online</Text>
            </View>
           
          </View>
          </>),
      }}
    />
    <View style={styles.container}>
  
<View style={{ backgroundColor:"#09D5FF",height:50,width:250,borderTopLeftRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50 ,padding:15,marginLeft:95,marginTop:30}} >
  <Text style={{ color:"white" }} >Hello chatGPT,how are you today?</Text>
</View>

<View>
<View style={{ backgroundColor:"#EEEEEE",height:50,width:250,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomRightRadius:50 ,padding:15,marginLeft:35,marginTop:20}} >
  <Text style={{ color:"black" }} >Hello, i ’m fine,how can i help you?</Text>
</View>
<Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{ width: 26, height: 26, borderRadius: 100,marginHorizontal:10}}
              />
</View>

<View style={{ backgroundColor:"#09D5FF",height:50,width:250,borderTopLeftRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50 ,padding:15,marginLeft:95,marginTop:5}} >
  <Text style={{ color:"white" }} >Hello chatGPT,how are you today?</Text>
</View>

<View>
<View style={{ backgroundColor:"#EEEEEE",height:200,width:250,borderTopLeftRadius:50,borderTopRightRadius:50,borderBottomRightRadius:50 ,padding:25,marginLeft:35,marginTop:25}} >
  <Text style={{ color:"black" }} >There are many programming languages ​​in the market that are used in designing and building websites, various applications and other tasks. All these languages ​​are popular in their place and in the way they are used, and many programmers learn and use them.</Text>
</View>
<Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{ width: 26, height: 26, borderRadius: 100,marginHorizontal:10}}
              />
</View>

<View style={{ backgroundColor:"#09D5FF",height:50,width:150,borderTopLeftRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50 ,padding:15,marginLeft:195,marginTop:5}} >
  <Text style={{ color:"white" }} >   So explain to me more</Text>
</View>




<View style={{position:"absolute",left:40,top:600, width:290,height:50,backgroundColor:"white",borderRadius:50 }}>
  <TextInput style={{ marginTop:11 ,paddingLeft:20,width:150}} placeholder="Write your message"/>

<View style={{ flexDirection:"row",bottom:25,left:220,alignItems:"center",gap:20 }}>

  <TouchableOpacity>
  <FontAwesome name="microphone" size={24} color="#CECECE" />
  </TouchableOpacity>


  <TouchableOpacity >
  <Ionicons name="send" size={24} color="#3369FF" />
  </TouchableOpacity>
</View>
</View>
    </View>
    </>)
  }
  
  export default Chat
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.bgColor,
      flex:1,

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
