import Icon from "@/components/Icon";
import ScreenView from "@/components/ScreenView";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import useData from "@/hooks/useData";

export default function HomeScreen() {
  const [{ addSong }] = useData();

  return (
    <ScreenView className="flex-1 justify-center items-center">
      <Text className="text-4xl my-8">Welcome to OnStage!</Text>
      <Link href="/songs/new" asChild>
        <Pressable className="flex flex-row items-center my-4">
          <Icon name="cloud-upload-outline" size={40} className="mr-2" />
          <Text className="text-3xl ml-2">Add a new Song</Text>
        </Pressable>
      </Link>
      <Link href="/set-lists" asChild>
        <Pressable className="flex flex-row items-center my-4">
          <Icon name="add-circle-outline" size={40} className="mr-2" />
          <Text className="text-3xl ml-2">Create a new Set List</Text>
        </Pressable>
      </Link>
    </ScreenView>
  );
}
