import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

// Icon dependency
import Ionicons from "@expo/vector-icons/Ionicons";

import Recipe from "./Recipe";

export default function RecipesScreen({ navigation }) {
  const [recipes, setRecipes] = useState([
    {
      title: "Bisquits Fried Out",
      category: "Dessert",
      img: "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
      id: 1,
    },
    {
      title: "Apple & Blackberry Crumble",
      category: "Dessert",
      img: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
      id: 2,
    },
    {
      title: "Rappie Pie",
      category: "Chicken",
      img: "https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg",
      id: 3,
    },
    {
      title: "Montreal Smoked Meat",
      category: "Beef",
      img: "https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg",
      id: 4,
    },
    {
      title: "Brie wrapped prosciutto",
      category: "Side",
      img: "https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg",
      id: 5,
    },
  ]);

  return (
    <ScrollView
      className="px-4 py-9 bg-[#f6f6f6]"
      keyboardDismissMode="interactive"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Text className="text-lg">Recipe List Screen</Text>
        <FlatList
          data={recipes}
          renderItem={({ item }) => (
            <Recipe
              key={item.id}
              title={item.title}
              category={item.category}
              img={item.img}
            />
          )}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
