import { useSQLiteContext } from "expo-sqlite";
export type DictionaryDatabaseType = {
    id: number,
    word: string,
    favortite: number,
    historic: number
}

export function useDictionaryDatabase(){
    const database = useSQLiteContext();
    async function insertWordToDb(data: Omit<DictionaryDatabaseType, "id">) {
        const statement = await database.prepareAsync(
            "INSERT INTO wordsTable (word, favorite, historic) VALUES ($word, $favorite, $historic)"
        );
        try {
            const result = await statement.executeAsync({$name: data.word, $favorite: 0, $historic: 1})
            const insertedRow = result.lastInsertRowId.toString();
            return {insertedRow}
        } catch (error) {
            throw error;
        }finally{
            await statement.finalizeAsync();
        }
    }

    async function updateWordFavoriteList(data: Omit<DictionaryDatabaseType, "id">) {
        const statement = await database.prepareAsync(
            "UPDATE wordsTable SET word = $word, favorite = $favorite, historic = $historic WHERE word = $word"
        );
        try {
            await statement.executeAsync({$name: data.word, $favorite: 0, $historic: 1})
        } catch (error) {
            throw error;
        }finally{
            await statement.finalizeAsync();
        }
    }
    
    async function getWord(word: string) {
        try {
            const query = "SELECT * FROM wordsTable WHERE word = ? ";
            const response = await database.getAllAsync<DictionaryDatabaseType>(query, `${word}`);
            return response;
        } catch (error) {
            throw error;
        }
    }

    
    return {insertWordToDb, getWord, updateWordFavoriteList};
}