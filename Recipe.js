import { View, Text, Image, TouchableOpacity } from "react-native";

// Icon Library
import { EvilIcons } from "@expo/vector-icons";
export default function Recipe({ title, category, img }) {
  return (
    <TouchableOpacity className="shadow-xl p-3 m-3 bg-white rounded-lg flex flex-row justify-between items-center">
      <View className=" flex flex-row items-center">
        <Image
          className="w-[50px] h-[50px] rounded-full"
          source={{ uri: img }}
        />
        <View className="ml-5">
          <Text className="text-md font-bold ">{title}</Text>
          <Text className="font-semibold text-sm text-accent_color">
            {category}
          </Text>
        </View>
      </View>

      <EvilIcons className="text-lg" name="chevron-right" size={30} />
    </TouchableOpacity>
  );
}
