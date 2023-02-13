import {
  Button,
  View,
  Alert,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";

import Ingredient from "./Ingredient";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RecipeDetailScreen({ meal, setRecipeDetailModal }) {
  return (
    <ScrollView className="bg-slate-100">
      <View className="pt-8 px-3">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity
            className="bg-[red]"
            onPress={() => setRecipeDetailModal(false)}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[#111] font-bold text-2xl p-2">
            {meal.strMeal}
          </Text>
          <TouchableOpacity>
            <Feather name="more-horizontal" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: meal.strMealThumb,
          }}
          className="w-[100%] h-[300px] mt-10 rounded-3xl shadow-lg shadow-indigo-500/40"
        />
        <Text className="text-2xl mt-5 font-semibold">Ingredients</Text>

        <SafeAreaView>
          <Ingredient ingr={meal.strIngredient1} amount={meal.strMeasure1} />
          <Ingredient ingr={meal.strIngredient2} amount={meal.strMeasure2} />
          {meal.strIngredient3 ? (
            <Ingredient ingr={meal.strIngredient3} amount={meal.strMeasure3} />
          ) : null}
          {meal.strIngredient4 ? (
            <Ingredient ingr={meal.strIngredient4} amount={meal.strMeasure4} />
          ) : null}
          {meal.strIngredient5 ? (
            <Ingredient ingr={meal.strIngredient5} amount={meal.strMeasure5} />
          ) : null}
          {meal.strIngredient6 ? (
            <Ingredient ingr={meal.strIngredient6} amount={meal.strMeasure6} />
          ) : null}
          {meal.strIngredient7 ? (
            <Ingredient ingr={meal.strIngredient7} amount={meal.strMeasure7} />
          ) : null}
          {meal.strIngredient8 ? (
            <Ingredient ingr={meal.strIngredient8} amount={meal.strMeasure8} />
          ) : null}
          {meal.strIngredient9 ? (
            <Ingredient ingr={meal.strIngredient9} amount={meal.strMeasure9} />
          ) : null}
          {meal.strIngredient10 ? (
            <Ingredient
              ingr={meal.strIngredient10}
              amount={meal.strMeasure10}
            />
          ) : null}
          {meal.strIngredient11 ? (
            <Ingredient
              ingr={meal.strIngredient11}
              amount={meal.strMeasure11}
            />
          ) : null}
          {meal.strIngredient12 ? (
            <Ingredient
              ingr={meal.strIngredient12}
              amount={meal.strMeasure12}
            />
          ) : null}
          {meal.strIngredient13 ? (
            <Ingredient
              ingr={meal.strIngredient13}
              amount={meal.strMeasure13}
            />
          ) : null}
          {meal.strIngredient14 ? (
            <Ingredient
              ingr={meal.strIngredient14}
              amount={meal.strMeasure14}
            />
          ) : null}
          {meal.strIngredient15 ? (
            <Ingredient
              ingr={meal.strIngredient15}
              amount={meal.strMeasure15}
            />
          ) : null}
          {meal.strIngredient16 ? (
            <Ingredient
              ingr={meal.strIngredient16}
              amount={meal.strMeasure16}
            />
          ) : null}
          {meal.strIngredient17 ? (
            <Ingredient
              ingr={meal.strIngredient17}
              amount={meal.strMeasure17}
            />
          ) : null}
          {meal.strIngredient18 ? (
            <Ingredient
              ingr={meal.strIngredient18}
              amount={meal.strMeasure18}
            />
          ) : null}
          {meal.strIngredient19 ? (
            <Ingredient
              ingr={meal.strIngredient19}
              amount={meal.strMeasure19}
            />
          ) : null}
          {meal.strIngredient20 ? (
            <Ingredient
              ingr={meal.strIngredient20}
              amount={meal.strMeasure20}
            />
          ) : null}
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}
