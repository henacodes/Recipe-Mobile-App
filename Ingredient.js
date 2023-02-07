import { View, Image, Text } from "react-native";

export default function Ingredient({ ingr, amount }) {
  return (
    <View className=" flex flex-row items-center justify-between bg-slate-200/50 m-2 p-2 rounded">
      <View className="flex flex-row items-center">
        <Image
          className="w-[50px] h-[50px] bg-white rounded-lg p-5"
          source={{
            uri: `https://www.themealdb.com/images/ingredients/${ingr}.png`,
          }}
        />
        <Text className="text-md font-bold ml-5 ">{ingr}</Text>
      </View>
      <Text>{amount}</Text>
    </View>
  );
}
