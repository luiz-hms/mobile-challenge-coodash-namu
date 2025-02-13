import {type SQLiteDatabase} from 'expo-sqlite';

export async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS wordsTable (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            word TEXT NOT NULL,
            favorite INTEGER NOT NULL DEFAULT 0,
            historic INTEGER NOT NULL DEFAULT 0
        );
        
        `);
}