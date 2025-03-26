import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

export default function useData() {
  const [db, setDb] = useState<SQLite.SQLiteDatabase>();
  const [isReady, setIsReady] = useState(false);
  const [songs, setSongs] = useState<any>([]);

  async function initDatabase() {
    const sqldb = await SQLite.openDatabaseAsync("app.db");
    setDb(sqldb);
    console.log("Database initialized: ", sqldb);

    const result = await sqldb.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS song (
            id INTEGER PRIMARY KEY NOT NULL, 
            title TEXT NOT NULL, 
            artist TEXT,
            song_key TEXT,
            source TEXT
        );`);

    console.log("initDatabase result", result);
    setIsReady(true);
  }

  async function addSong({
    title,
    artist,
    song_key,
    source,
  }: {
    title: string;
    artist: string;
    song_key: string;
    source: string;
  }) {
    if (!db || !title) {
      console.error("Database not initialized");
      return;
    }
    const result = await db.runAsync(
      `
        INSERT INTO song (title, artist, song_key, source)
        VALUES (?, ?, ?, ?);`,
      title,
      artist,
      song_key,
      source
    );

    console.log("addSong result", result);
  }

  async function getSongs() {
    console.log("getSongs db: ", db);
    if (!db) {
      console.error("Database not initialized");
      return;
    }
    const result = await db.getAllAsync(`SELECT * FROM song;`);
    console.log("getSongs result", result);
    return result;
  }

  useEffect(() => {
    initDatabase();
  }, []);

  return [{ addSong, getSongs, isReady }];
}
