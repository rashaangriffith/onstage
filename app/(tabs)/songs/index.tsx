import SongsList from "@/components/SongsList";
import Icon from "@/components/Icon";
import ScreenView from "@/components/ScreenView";
import { Button, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import useData from "@/hooks/useData";

export default function SongsScreen() {
  const [{ getSongs }] = useData();

  function handleGetSongsPress() {
    getSongs();
  }
  return (
    <ScreenView className="p-4">
      <View className="flex flex-row items-center justify-between w-full">
        <Text className="text-5xl">Songs</Text>
        <Link href="/(tabs)/songs/new" asChild>
          <Pressable className="flex flex-row items-center my-4">
            <Icon name="cloud-upload-outline" size={40} className="mr-2" />
            <Text className="text-3xl ml-2">New</Text>
          </Pressable>
        </Link>
      </View>
      <SongsList />
      <Button title="Get Songs" onPress={handleGetSongsPress} />
    </ScreenView>
  );
}
