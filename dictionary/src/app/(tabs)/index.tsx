import { Button, FlatList, Pressable, Text, View } from "react-native";
import {DictionaryDatabaseType, useDictionaryDatabase} from '@/database/useDictionaryDatabase';
import { useEffect, useState } from "react";
import {Wordcard } from '@/components/WordCard';

export default function Index() {
  const [listWord, setListword] = useState<DictionaryDatabaseType[]>([]);
  const dictionaryDatabase = useDictionaryDatabase();
/*
ler o arquivo json
    // na url deve se trocar o localhost pelo ip da mpaquina
    useEffect(() => {
        async function getFoods(){
            const response = await fetch('http://192.168.3.52:3000/foods');
            const data = await response.json();
            setFoods(data);
        }
        getFoods();
    },[]);

*/
  useEffect(() => {
    getword();
  },[]);
  async function insertHistoric(){
    try {
      const response = await dictionaryDatabase.insertWordToDb({word: '', favortite:0, historic:1});
      
    } catch (error) {
      console.log(error);
    }
  }

  async function getword() {
    try {
      const response = await dictionaryDatabase.getWord('');
      setListword(response)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="butãum" onPress={() => dictionaryDatabase.insertWordToDb}/>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      
      <FlatList 
        data={listWord} 
        keyExtractor={(item) => String(item.id)} 
        renderItem={({item}) => <Wordcard word={item.word} favorite={item.favortite} />
      }
      contentContainerStyle={{gap:16}}
      /> 
    </View>
  );
}
/* precisa ser uma string*/