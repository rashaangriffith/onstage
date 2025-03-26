import { Button, Pressable, Text, View } from "react-native";
import Icon from "./Icon";
import { Link, useFocusEffect } from "expo-router";
import useData from "@/hooks/useData";
import { useCallback, useEffect, useState } from "react";

export default function SongsList() {
  const [songs, setSongs] = useState<any>([]);
  const [{ getSongs, isReady }] = useData();

  useFocusEffect(
    useCallback(() => {
      async function fetchSongs() {
        const songsData = await getSongs();
        console.log("songsData", songsData);
        setSongs(songsData);
      }
      console.log("SongList useEffect isReady", isReady);
      if (!isReady) {
        return;
      }
      fetchSongs();
    }, [isReady])
  );

  // useEffect(() => {
  //   async function fetchSongs() {
  //     const songsData = await getSongs();
  //     console.log("songsData", songsData);
  //     setSongs(songsData);
  //   }
  //   console.log("SongList useEffect isReady", isReady);
  //   if (!isReady) {
  //     return;
  //   }
  //   fetchSongs();
  // }, [isReady]);

  useEffect(() => {
    console.log("SongList useEffect songs", songs);
  }, [songs]);

  // const songs = [
  //   {
  //     id: 100,
  //     title: "Song 1",
  //     artist: "Artist 1",
  //     key: "C",
  //     timeSignature: "4/4",
  //     tempo: 120,
  //   },
  //   {
  //     id: 101,
  //     title: "Song 2",
  //     artist: "Artist 2",
  //     key: "G",
  //     timeSignature: "3/4",
  //     tempo: 100,
  //   },
  //   {
  //     id: 102,
  //     title: "Song 3",
  //     artist: "Artist 3",
  //     key: "D",
  //     timeSignature: "6/8",
  //     tempo: 140,
  //   },
  // ];

  if (!songs) {
    return <Text>No songs found</Text>;
  }

  return (
    <View className="">
      {songs?.map((song: any) => (
        <Link key={song.id} href={`/(tabs)/songs/details/${song.id}`} asChild>
          <Pressable className="border border-gray-300 p-4">
            <View className="flex flex-row items-center justify-between">
              <View>
                <Text className="text-2xl">{song.title}</Text>
                <Text>{song.artist}</Text>
              </View>
              <Icon name="close-outline" size={30} />
            </View>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}
