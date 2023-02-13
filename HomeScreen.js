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
  Alert,
  StatusBar,
} from "react-native";

import Recipe from "./Recipe";
import RecipeDetailScreen from "./RecipeDetailScreen";
// Icon dependency
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import axios from "axios";
export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [randomMeal, setRandomMeal] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [categoryMeals, setCategoryMeals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [recipeDetailModal, setRecipeDetailModal] = useState(false);
  const [mealDetail, setMealDetail] = useState({});
  const API_URI = "https://www.themealDb.com/api/json/v1/1";
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
      .get(`${API_URI}/search.php?s=${searchQuery}`)
      .then((res) => setSearchResults(res.data.meals))
      .catch((err) => console.log(err));
    return setModalVisible(true);
  };

  const showSearchDetail = (item) => {
    setMealDetail(item);
    setRecipeDetailModal(true);
  };

  const showDetailModal = (id) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setMealDetail(res.data.meals[0]))
      .catch((err) => console.log(err));
    setRecipeDetailModal(true);
  };

  assignClass = (cat) => {
    if (cat == activeCategory) {
      return "bg-[#111] rounded-md px-4 py-3 m-2 w-[100px] flex flex-row justify-center items-center  shadow shadow-gray-400";
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
      .get(`${API_URI}/random.php`)
      .then((res) => setRandomMeal(res.data.meals[0]))
      .catch((err) => console.log("error happened hena"));
  }, []);
  useEffect(() => {
    axios
      .get(`${API_URI}/filter.php?c=${activeCategory}`)
      .then((res) => setCategoryMeals(res.data.meals))
      .catch((err) => console.log(err));
  }, [activeCategory]);

  return (
    <>
      <StatusBar animated={true} backgroundColor="#34bd6a" />
      <Modal
        className="mb-[50px] bg-[#ff2e2e] "
        animationType="slide"
        visible={modalVisible}
      >
        <View className="flex flex-row  justify-between items-center m-3 px-5 pt-5">
          <Text
            onPress={() => {
              setModalVisible(false);
              setSearchResults(null);
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </Text>
          <Text className="text-lg">
            Search Results for
            <Text className="text-accent_color">
              '{" " + searchQuery}'
            </Text>{" "}
          </Text>
        </View>
        <ScrollView className=" bg-[#f6f6f6]">
          <SafeAreaView style={{ flex: 1 }}>
            <FlatList
              data={searchResults ? searchResults.slice(0, 10) : []}
              renderItem={({ item }) => (
                <Recipe
                  item={item}
                  showSearchDetail={showSearchDetail}
                  setMealDetail={setMealDetail}
                  setRecipeDetailModal={setRecipeDetailModal}
                  key={item.idMeal}
                  id={item.idMeal}
                  title={item.strMeal}
                  category={activeCategory}
                  img={item.strMealThumb}
                />
              )}
            />
          </SafeAreaView>
        </ScrollView>
      </Modal>
      <Modal animationType="slide" visible={recipeDetailModal}>
        <RecipeDetailScreen
          meal={mealDetail}
          setRecipeDetailModal={setRecipeDetailModal}
        />
      </Modal>
      <ScrollView
        className="px-2 py-9 bg-[#f6f6f6]"
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
                className={assignClass(categories[index])}
              >
                <Text className="text-accent_color text-lg font-bold ">
                  {categories[index]}
                </Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
        {activeCategory ? (
          <ScrollView>
            <SafeAreaView style={{ flex: 1 }}>
              <FlatList
                data={categoryMeals}
                className="mb-10"
                renderItem={({ item }) => (
                  <Recipe
                    setMealDetail={setMealDetail}
                    showDetailModal={showDetailModal}
                    setRecipeDetailModal={setRecipeDetailModal}
                    key={item.idMeal}
                    id={item.idMeal}
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
            <Text className="text-3xl mt-10 font-bold">Featured Meal</Text>
            <TouchableOpacity onPress={() => showSearchDetail(randomMeal)}>
              <Image
                source={{
                  uri: randomMeal.strMealThumb,
                }}
                className="w-[100%] h-[400px] mt-5 rounded-3xl mb-[-400px]"
              />
              <View className="w-[100%] h-[400px]  bg-slate-900/60 rounded-3xl mb-[-100px]"></View>

              <View className="mb-[130px] ml-10">
                <Text className=" text-4xl text-slate-100 font-bold ">
                  {randomMeal.strMeal ? shortenStr(randomMeal.strMeal) : null}
                </Text>
                <Text className="text-slate-200">{randomMeal.strCategory}</Text>
              </View>
            </TouchableOpacity>
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
