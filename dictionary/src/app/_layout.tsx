import { Stack } from "expo-router";
import { SQLiteProvider} from 'expo-sqlite';
import {initializeDatabase} from '@/database/intializeDatabase';

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="dictionary.db" onInit={initializeDatabase}>

    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
    </SQLiteProvider>
  );
}
