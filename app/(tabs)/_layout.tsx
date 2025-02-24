import "../../global.css";
import Icon from "@/components/Icon";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="charts"
        options={{
          title: "Charts",
          tabBarIcon: ({ color }) => (
            <Icon name="document-text-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="set-lists"
        options={{
          title: "Set Lists",
          tabBarIcon: ({ color }) => (
            <Icon name="list-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Icon name="settings-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
