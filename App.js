import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Emergency from './components/Emergency';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarActiveTintColor:'white',
          tabBarStyle:{ backgroundColor:'#3e4f7e'},
          headerShown: false,
        }}>
          <Tab.Screen
            name='Home'
            component={Home}
            options={{
              tabBarIcon:({focused})=>(
                <Icon name ='home' color={focused ? 'white': 'lightgrey'} size={30}/>
              )
            }}
          >
          </Tab.Screen>
          <Tab.Screen
            name='Emergency'
            component={Emergency}
            options={{
              tabBarIcon:({focused})=>(
                <Icon name ='ambulance' color={focused ? 'white': 'lightgrey'} size={30}/>
              )
            }}
          >
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  );
}


