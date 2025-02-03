import { CustomHeader } from '@/components/CustomHeader';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
      }}>
        <Tabs.Screen 
          name='home'
          options={{
            headerStyle:{
              height:120
            },
            headerTitle:(props)=> <CustomHeader />
          }}
        />
        <Tabs.Screen 
          name='activities'
        />
        <Tabs.Screen 
          name='account'
        />
        <Tabs.Screen 
          name='statistics'
        />
    </Tabs>
  );
}
