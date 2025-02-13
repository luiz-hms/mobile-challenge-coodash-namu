import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#7159c1', headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
        <Tabs.Screen
          name="historicWords"
          options={{
          title: 'historic',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
        }}
        />
      <Tabs.Screen
        name="favoriteWords"
        options={{
          title: 'favorite',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} />,
        }}
      />
    </Tabs>
  );
}
