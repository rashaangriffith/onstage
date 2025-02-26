import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ChartDetails() {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 justify-center items-center">
      <Text>{`Chart: ${id}`}</Text>
    </View>
  );
}
