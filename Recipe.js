import { View, Text, Image, TouchableOpacity } from "react-native";

// Icon Library
import { EvilIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import axios from "axios";

import shortenString from "./shortenString";
export default function Recipe({
  setMealDetail,
  item,
  showDetailModal,
  id,
  title,
  category,
  img,
  showSearchDetail,
}) {
  const handleTouch = () => {
    if (item) {
      console.log("there is an item datail");
      return showSearchDetail(item);
    } else {
      console.log("there is nothing");
      showDetailModal(id);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleTouch}
      className="shadow-xl p-3 py-7 m-3 bg-white rounded-lg flex flex-row justify-between items-center"
    >
      <View className=" flex flex-row items-center">
        <Image
          className="w-[70px] h-[70px]  rounded-full"
          source={{ uri: img }}
        />
        <View className="ml-5">
          <Text className="text-xl font-bold ">{shortenString(title, 19)}</Text>
          <Text className="font-semibold text-sm text-accent_color">
            {category}
          </Text>
        </View>
      </View>

      <EvilIcons className="text-lg" name="chevron-right" size={30} />
    </TouchableOpacity>
  );
}
