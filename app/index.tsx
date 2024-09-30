import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/bottomNav/home/Home';
import Chart from './screens/bottomNav/chart';
import Profil from './screens/bottomNav/Profile';
import Sting from './screens/bottomNav/sitting';
import Store from './screens/bottomNav/store';
const Tab = createBottomTabNavigator();
import { Ionicons } from "@expo/vector-icons";
// export default function index() {
//   return (
//       <Tab.Navigator   >
//         <Tab.Screen name="Home" component={Home}  options={{ headerShown: false,title:"all" }} />
//         <Tab.Screen name="Chart" component={Chart}  options={{ headerShown: false }} />
//         <Tab.Screen name="Profil" component={Profil}  options={{ headerShown: false }} />
//         <Tab.Screen name="Sting" component={Sting}  options={{ headerShown: false }} />
//         <Tab.Screen name="Store" component={Store}  />
//       </Tab.Navigator>

//   );
// }



// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.


// (...)

export default function App() {
  return (
  <>
  
  

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Sting') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
       <Tab.Screen name="Home" component={Home}  options={{ headerShown: false,title:"all" }} />
        <Tab.Screen name="Chart" component={Chart}  options={{ headerShown: false }} />       <Tab.Screen name="Profil" component={Profil}  options={{ headerShown: false }} />
       <Tab.Screen name="Sting" component={Sting}  options={{ headerShown: false }} />
         <Tab.Screen name="Store" component={Store}  />
      </Tab.Navigator>
      </>
  );
}