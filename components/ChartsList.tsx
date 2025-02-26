import { Pressable, Text, View } from "react-native";
import Icon from "./Icon";
import { Link } from "expo-router";

export default function ChartsList() {
  const charts = [
    {
      id: 100,
      title: "Chart 1",
      artist: "Artist 1",
      key: "C",
      timeSignature: "4/4",
      tempo: 120,
    },
    {
      id: 101,
      title: "Chart 2",
      artist: "Artist 2",
      key: "G",
      timeSignature: "3/4",
      tempo: 100,
    },
    {
      id: 102,
      title: "Chart 3",
      artist: "Artist 3",
      key: "D",
      timeSignature: "6/8",
      tempo: 140,
    },
  ];

  return (
    <View className="">
      {charts.map((chart) => (
        <Link
          key={chart.id}
          href={`/(tabs)/charts/details/${chart.id}`}
          asChild
        >
          <Pressable className="border border-gray-300 p-4">
            <View className="flex flex-row items-center justify-between">
              <View>
                <Text className="text-2xl">{chart.title}</Text>
                <Text>{chart.artist}</Text>
              </View>
              <Icon name="close-outline" size={30} />
            </View>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}
