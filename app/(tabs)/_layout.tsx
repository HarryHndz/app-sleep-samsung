import { CustomHeader } from '@/components/CustomHeader';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Tabs } from 'expo-router';
import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';

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
            headerStyle:{
              height:120
            },
            headerTitle:(props)=> <CustomHeader />
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
          }}
        />
    </Tabs>
  );
}
