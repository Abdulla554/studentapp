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
  import { AntDesign ,Ionicons,SimpleLineIcons,MaterialIcons,FontAwesome6   } from "@expo/vector-icons";
  import Colors from "@/constants/Colors";
  import { useNavigation } from '@react-navigation/native';
  import { useRoute } from '@react-navigation/native';

const PrivacyPolicy = () => {
    const navigation = useNavigation();

  return (
    <>

    <Stack.Screen
    options={{
      headerTransparent: false,
      headerTitle: "",
      headerShadowVisible:false,
      headerRight: () => (
       <Text style={{ fontSize:20,fontWeight:"bold",marginRight:100 }}>Privacy Policy</Text>
      
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
  <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.container}>



<View>
    <Text style={{ fontSize:20,fontWeight:"bold",marginVertical:20 }}>1. Types data we collect</Text>
<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
<Text style={{ marginVertical:20 }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</Text>

</View>

<View>
    <Text style={{ fontSize:20,fontWeight:"bold",marginVertical:20 }}>2. Use of your personal data</Text>
<Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae. </Text>

<Text style={{ marginVertical:20 }}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</Text>

</View>

<View>
    <Text style={{ fontSize:18,fontWeight:"bold",marginVertical:20 }}>3. Disclosure of your personal data</Text>
<Text>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.  </Text>
<Text style={{ marginVertical:20 }}>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
</Text>



<Text style={{ marginVertical:10 }}>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus
</Text>
</View>







</View>
  </ScrollView>
  </>
  )
}

export default PrivacyPolicy


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