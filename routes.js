import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Catalog from './Catalog';
import Schedule from './Schedule';
import Equip from './Equip';
import Home from './Home';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#808080',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: ({ focused }) => ({
          fontSize: 12,
          fontWeight: 'bold',
          color: focused ? 'white' : 'black', // Altera a cor do texto para branco apenas quando o botão está selecionado
        }),
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color="white" />;
            }
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Catálogo"
        component={Catalog}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <AntDesign name="shoppingcart" size={size} color="white" />;
            }
            return <AntDesign name="shoppingcart" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={Schedule}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="book" size={size} color="white" />;
            }
            return <Ionicons name="book-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Equipe"
        component={Equip}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color="white" />;
            }
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
