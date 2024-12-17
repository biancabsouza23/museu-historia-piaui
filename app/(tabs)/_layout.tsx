import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="livros"
        options={{
          title: 'Livros',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="jornais"
        options={{
          title: 'Jornais',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'newspaper' : 'newspaper-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fotosvideos"
        options={{
          title: 'Fotos e Vídeos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'image' : 'image-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ppghb"
        options={{
          title: 'PPGHB',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'school' : 'school-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="periodicos"
        options={{
          title: 'Periódicos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'file-tray' : 'file-tray-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
