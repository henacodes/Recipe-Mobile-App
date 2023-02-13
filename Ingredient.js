import { View, Image, Text } from "react-native";

export default function Ingredient({ ingr, amount }) {
  return (
    <View className=" flex flex-row items-center justify-between bg-slate-200/50 m-2 p-2 py-5 rounded">
      <View className="flex flex-row items-center">
        <Image
          className="w-[70px] h-[70px]  bg-white rounded-lg p-10"
          source={{
            uri: `https://www.themealdb.com/images/ingredients/${ingr}.png`,
          }}
        />
        <Text className="text-xl font-bold ml-5 ">{ingr}</Text>
      </View>
      <Text className="text-md m-2">{amount}</Text>
    </View>
  );
}
