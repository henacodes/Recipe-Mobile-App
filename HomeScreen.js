import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Modal,
} from "react-native";

import Recipe from "./Recipe";
// Icon dependency
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import axios from "axios";
export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [randomMeal, setRandomMeal] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [categoryMeals, setCategoryMeals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const shortenStr = (word) => {
    if (word.length >= 14) {
      const newWord = word.slice(0, 13);
      return newWord + " ...";
    } else {
      return word;
    }
  };

  const handleCategories = (cat) => {
    return setActiveCategory(cat);
  };

  const handleSearch = () => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      )
      .then((res) => setSearchResults(res.data.meals))
      .catch((err) => console.log(err));
    return setModalVisible(true);
  };

  assignClass = (cat) => {
    if (cat == activeCategory) {
      return "bg-[#111] rounded-md px-4 py-3 m-2 w-[100px] flex items-center  shadow shadow-gray-400";
    } else {
      return "bg-[#fff] rounded-md px-4 py-3 m-2 w-[100px] flex items-center  shadow shadow-gray-400";
    }
  };

  const categories = [
    "Beef",
    "Chicken",
    "Dessert",
    "Lamb",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Breakfast",
    "Goat",
    "Vegetarian",
    "Vegan",
    "Starter",
  ];

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => setRandomMeal(res.data.meals[0]))
      .catch((err) => console.log("error happened hena"));
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`
      )
      .then((res) => setCategoryMeals(res.data.meals))
      .catch((err) => console.log(err));
  }, [activeCategory]);

  console.log(searchResults);

  return (
    <>
      <Modal className="mb-[50px]" animationType="slide" visible={modalVisible}>
        <View className="flex flex-row justify-between items-center m-3 px-5 pt-5">
          <Text className="text-lg">
            Search Results for{" "}
            <Text className="text-accent_color">'{searchQuery}'</Text>{" "}
          </Text>
          <Text
            onPress={() => {
              setModalVisible(false);
              setSearchResults(null);
            }}
          >
            <Ionicons name="close-circle-outline" color={"red"} size={24} />
          </Text>
        </View>

        <ScrollView className="">
          <SafeAreaView style={{ flex: 1 }}>
            <FlatList
              data={searchResults}
              renderItem={({ item }) => (
                <Recipe
                  key={item.idMeal}
                  title={item.strMeal}
                  category={activeCategory}
                  img={item.strMealThumb}
                />
              )}
            />
          </SafeAreaView>
        </ScrollView>
      </Modal>
      <ScrollView
        className="px-4 py-9 bg-[#f6f6f6]"
        keyboardDismissMode="interactive"
      >
        {/* Header */}
        <Text className="text-[#34bd6a] text-[30px] text-{'poppins'}">
          Find The Best Recipe
        </Text>
        {/* Search Bar */}
        <View className="flex flex-row items-center w-[100%] h-[40px] bg-amber-700 my-5  rounded-r-md  rounded-l-md">
          <TextInput
            placeholder="search recipes"
            className="bg-[#ffffff] w-[85%] h-[100%] rounded-l-md pl-4 "
            keyboardType="search"
            onChangeText={(newText) => setSearchQuery(newText)}
            value={searchQuery}
          />
          <TouchableOpacity
            onPress={handleSearch}
            className="bg-accent_color w-[15%] h-[100%] flex justify-around items-center rounded-r-md  "
          >
            <Ionicons name="search" />
          </TouchableOpacity>
        </View>
        {/* categories horizontal scroll */}
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.horizScroll}
        >
          <FlatList
            horizontal
            data={categories}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => handleCategories(categories[index])}
                className={assignClass(categories[0])}
              >
                <Text className="text-accent_color">{categories[index]}</Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
        {activeCategory ? (
          <ScrollView>
            <SafeAreaView style={{ flex: 1 }}>
              <FlatList
                data={categoryMeals}
                renderItem={({ item }) => (
                  <Recipe
                    key={item.idMeal}
                    title={item.strMeal}
                    category={activeCategory}
                    img={item.strMealThumb}
                  />
                )}
              />
            </SafeAreaView>
          </ScrollView>
        ) : (
          <View>
            <Text className="text-xl font-bold">Featured Meal</Text>
            <Image
              source={{
                uri: randomMeal.strMealThumb,
              }}
              className="w-[100%] h-[400px] mt-10 rounded-3xl mb-[-400px]"
            />
            <View className="w-[100%] h-[400px]  bg-slate-900/60 rounded-3xl mb-[-100px]"></View>

            <View className="mb-[130px] ml-10">
              <Text className=" text-4xl text-slate-100 font-bold ">
                {randomMeal.strMeal ? shortenStr(randomMeal.strMeal) : null}
              </Text>
              <Text className="text-slate-200">{randomMeal.strCategory}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  horizScroll: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    height: 70,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
