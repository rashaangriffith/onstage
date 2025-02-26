import ChartsList from "@/components/ChartsList";
import Icon from "@/components/Icon";
import ScreenView from "@/components/ScreenView";
import { Pressable, Text, View } from "react-native";

export default function ChartsScreen() {
  return (
    <ScreenView className="p-4">
      <View className="flex flex-row items-center justify-between w-full">
        <Text className="text-5xl">Charts</Text>
        <Pressable className="flex flex-row items-center my-4">
          <Icon name="cloud-upload-outline" size={40} className="mr-2" />
          <Text className="text-3xl ml-2">New</Text>
        </Pressable>
      </View>
      <ChartsList />
    </ScreenView>
  );
}
