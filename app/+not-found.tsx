import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Not Found!" }} />
      <View>
        <Text>Sorry, but this screen doesn't exist</Text>
        <Link href="/(tabs)/index">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
