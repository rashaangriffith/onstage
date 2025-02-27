import ScreenView from "@/components/ScreenView";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { Image } from "expo-image";

export default function ChartDetails() {
  const { id } = useLocalSearchParams();
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  return (
    <ScreenView className="flex-1 justify-center items-center">
      <Text>{`Chart id: ${id}`}</Text>
      <Image
        source="https://www.vgleadsheets.com/assets/sheets/png/C/Castlevania%20-%20Vampire%20Killer-1.png"
        style={{ width: "100%", height: "100%" }}
        placeholder={{ blurhash }}
        contentFit="contain"
      />
    </ScreenView>
  );
}
