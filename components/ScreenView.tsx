import { View } from "react-native";

export default function ScreenView({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <View className={`p-4 ${className}`}>{children}</View>;
}
