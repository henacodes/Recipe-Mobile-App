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
  StatusBar,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

// Icon dependency
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

import Socials from "./Socials";
export default function About({ navigation }) {
  return (
    <ScrollView
      className="px-4 py-9 bg-[#f6f6f6] "
      keyboardDismissMode="interactive"
    >
      <StatusBar animated={true} backgroundColor="#34bd6a" />
      <Text>
        Hello, I am <Text className="text-accent_color font-bold">Henok</Text>{" "}
        and I built this app as a way of learning React Native
      </Text>
      <Text className="font-bold text-xl">Find me:</Text>
      <Socials title="github" link={"https://github.com/henacodes"} />
      <Socials title="telegram" link={"https://t.me/henacodes"} />
    </ScrollView>
  );
}
