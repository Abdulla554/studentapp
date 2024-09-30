import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
// import { ListingType } from "@/types/listingType";
import Colors from "@/constants/Colors";
import { Ionicons,AntDesign  } from "@expo/vector-icons";
import { Link } from "expo-router";
const Arr=[
  {color:"#F35A9B",tital:"رياضيات"},
  {color:"#5AF3B3",tital:"اسلامية"},
  {color:"#FF53EE",tital:"  احياء"},
  {color:"#F3B960",tital:"  فيزياء"},
  {color:"#9DB2CE",tital:"  كيمياء"},
  {color:"green",tital:" انكليزي"}
]
type ItemProps = {tital: string,color:string};
const RenderItems=({tital,color}:ItemProps)=>{
  return(
    <TouchableOpacity style={styles.item}>

    <View style={{ flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:12,paddingVertical:6 }}>
     <Text>24/05/12</Text>
     <Text style={{ fontSize:18,fontWeight:"bold", color:color }}>{tital}</Text>
    </View>


    <View style={{ paddingHorizontal:10,paddingTop:6 }}>
<Text style={{ fontSize:15,fontWeight:"bold"}}>أ.احمد وحيد</Text>
<Text>من ص43 الى ص88</Text>
    </View>

    <View style={{ marginTop:15,width:50,height:33,backgroundColor:color ,borderBottomLeftRadius:22,borderTopRightRadius:22}}>
   
    <AntDesign style={{ top:7,left:13 }} name="appstore-o" size={20} color="white" />
    </View>
  

   </TouchableOpacity>
  )
}


const Listings = () => {
  return (
        <View>
      <FlatList
        data={Arr}
        renderItem={({item}) => <RenderItems tital={item.tital} color={item.color} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Listings

// renderItem={({item}) => <renderItems title={item.title} color={item.color} />}

























































// type Props = {
//   listings: any[];
//   category: string;
// };

// const Listings = ({ listings, category }: Props) => {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     console.log('Update Listing');
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false)
//     }, 200);
//   }, [category]);

//   const renderItems: ListRenderItem<ListingType> = ({ item }) => {
//     return (
//       <Link href={`/listing/${item.id}`} asChild>
//         <TouchableOpacity>
//           <View style={styles.item}>
//             <Image source={{ uri: item.image }} style={styles.image} />
            
//             <View style={styles.bookmark}>
//               <Ionicons
//                 name="bookmark-outline"
//                 size={20}
//                 color={Colors.white}
//               />
//             </View>


//             <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
//               {item.name}
//             </Text>

//             <View
//               style={{ flexDirection: "row", justifyContent: "space-between" }}
//             >
//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <FontAwesome5
//                   name="map-marker-alt"
//                   size={18}
//                   color={Colors.primaryColor}
//                 />
//                 <Text style={styles.itemLocationTxt}>{item.location}</Text>
//               </View>
//               <Text style={styles.itemPriceTxt}>${item.price}</Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//       </Link>
//     );
//   };

//   return (
//     <View>
//       <FlatList
//         data={loading ? [] : listings}
//         renderItem={renderItems}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// export default Listings;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginRight: 20,
    width: 190,
    height:130
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


