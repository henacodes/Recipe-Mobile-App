import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
export default function Socials({ title, link }) {
  return (
    <View className="flex flex-row items-center bg-slate-200 m-3 p-3">
      <FontAwesome5 name={title} size={24} color="black" />
      <Text className="ml-2 text-blue-500">{link}</Text>
    </View>
  );
}
