import Icon from "@/components/Icon";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-4xl my-8">Welcome to OnStage!</Text>
      <Link href="/charts" asChild>
        <Pressable className="flex flex-row items-center my-4">
          <Icon name="cloud-upload-outline" size={40} className="mr-2" />
          <Text className="text-3xl ml-2">Upload a new Chart</Text>
        </Pressable>
      </Link>
      <Link href="/set-lists" asChild>
        <Pressable className="flex flex-row items-center my-4">
          <Icon name="add-circle-outline" size={40} className="mr-2" />
          <Text className="text-3xl ml-2">Create a new Set List</Text>
        </Pressable>
      </Link>
    </View>
  );
}
