import { HeaderHome } from '@/components/HeaderHome';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Tabs } from 'expo-router';
import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';
import { HeaderStatistics } from '@/components/HeaderStatistics';

export default function TabLayout() {
  const theme = useThemeColor()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:theme.tint,
      }}>
        <Tabs.Screen 
          name='home'
          options={{
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
            tabBarIcon:({focused})=>(
              <Icon 
                name='add-circle' 
                size={25} 
                color={focused ? theme.tint :theme.text} 
                />
            ),
            headerShown:false
          }}
        />
        <Tabs.Screen 
          name='statistics'
          options={{
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
