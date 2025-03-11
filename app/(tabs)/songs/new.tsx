import FormTextInput from "@/components/form/FormTextInput";
import ScreenView from "@/components/ScreenView";
import useData from "@/hooks/useData";
import { useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";
import { router } from "expo-router";

export default function NewSong() {
  //   const { id } = useLocalSearchParams();
  //   const blurhash =
  //     "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const [{ addSong, getSongs }] = useData();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  async function onFormSubmit(data: any) {
    console.log("form data", data);
    await addSong(data);
    // await getSongs();
    router.back();
  }

  return (
    <ScreenView className="flex-1 justify-center items-center">
      <Text className="4xl">New Song</Text>
      <View className="flex flex-row items-center">
        <Text>title:</Text>
        <FormTextInput name="title" control={control} />
      </View>
      <View className="flex flex-row items-center">
        <Text>artist:</Text>
        <FormTextInput name="artist" control={control} />
      </View>
      <View className="flex flex-row items-center">
        <Text>key:</Text>
        <FormTextInput name="key" control={control} />
      </View>
      <View className="flex flex-row items-center">
        <Text>source:</Text>
        <FormTextInput name="source" control={control} />
      </View>
      <Button title="Add Song" onPress={handleSubmit(onFormSubmit)} />
    </ScreenView>
  );
}
