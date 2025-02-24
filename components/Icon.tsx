import { Ionicons } from "@expo/vector-icons";

export default function Icon({
  name,
  size,
  color,
  className,
}: {
  name: any;
  size: number;
  color?: string;
  className?: string;
}) {
  return (
    <Ionicons name={name} size={size} color={color} className={className} />
  );
}
