import { Stack } from "expo-router";

export default function SongsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="details/[id]" />
      <Stack.Screen name="new" />
    </Stack>
  );
}
