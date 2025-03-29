import { HeaderHome } from '@/components/Home/HeaderHome';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Tabs } from 'expo-router';
import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';
import { HeaderStatistics } from '@/components/Statistics/HeaderStatistics';
import { HeaderActivities } from '@/components/Activities/HeaderActivities';

export default function TabLayout() {
  const theme = useThemeColor()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:theme.tint,
        tabBarStyle:{
          backgroundColor:theme.header,
        }
      }}>
        <Tabs.Screen 
          name='home'
          options={{
            title:'Inicio',
            tabBarIcon:({focused})=>(
              <Icon 
                name='home' 
                size={25} 
                color={focused ? theme.tint :theme.text} 
              />
            ),
            header:(props)=> <HeaderHome />
          }}
        />
        <Tabs.Screen 
          name='activities'
          options={{
            title:'Actividades',
            tabBarIcon:({focused})=>(
              <Icon 
                name='add-circle' 
                size={25} 
                color={focused ? theme.tint :theme.text} 
                />
            ),
            header:(props)=> <HeaderActivities/>
          }}
        />
        <Tabs.Screen 
          name='statistics'
          options={{
            title:'Estadisticas',
            tabBarIcon:({focused})=>(
              <Icon 
                name='bar-chart' 
                size={25} 
                color={focused ? theme.tint :theme.text} 
                />
            ),
            header:(props)=> <HeaderStatistics/>
          }}
        />
        <Tabs.Screen 
          name='account'
          options={{
            title:'Cuenta',
            tabBarIcon:({focused})=>(
              <Icon 
                name='account-circle' 
                size={25} 
                color={focused ? theme.tint :theme.text} 
                />
            ),
            headerShown:false
          }}
        />
    </Tabs>
  );
}
