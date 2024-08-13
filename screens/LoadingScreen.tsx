import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ArrowRight } from "@/assets/icons";
import { languages as initialLanguages } from "../constants/languages";

const LoadingScreen = () => {
  const [languages, setLanguages] = useState(initialLanguages);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleSelectedLanguage = (code: string) => {
    // console.log(code);
    const updatedLanguages = languages.map((language) => ({
      ...language,
      isSelected: language.code === code,
    }));
    setLanguages(updatedLanguages);
  };

  return (
    <View className="relative flex-1 bg-[#f9f9f9]">
      <View className="flex items-center mt-20">
        <Image
          source={require("../assets/images/whatsapp-bg.jpg")}
          className="w-56 h-56 rounded-full opacity-30"
          resizeMode="cover"
        />
      </View>
      <View className="absolute top-48 px-6 bg-[#f9f9f9] pb-16 w-full space-y-3">
        <Text className="text-[28px] font-bold text-center">
          Welcome to WhatsApp
        </Text>
        <Text className="text-lg text-center">
          Choose your languaue to get started
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: "#f9f9f9",
          paddingBottom: 5,
          paddingHorizontal: 20,
          zIndex: 0,
        }}
      >
        <View className="space-y-4">
          {languages.map((language, index) => {
            return (
              <View key={index} className="flex-row items-center gap-4">
                <TouchableOpacity
                  onPress={() => handleSelectedLanguage(language.code)}
                  style={{
                    borderColor: language.isSelected ? "green" : "gray",
                    borderWidth: 2,
                    borderRadius: 50,
                    width: 20,
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    className={`w-3 h-3 rounded-full ${
                      language.isSelected ? "bg-green-700" : "bg-transparent"
                    }`}
                  />
                </TouchableOpacity>
                <View className="space-y-1">
                  <Text className="font-semibold">{language.name}</Text>
                  <Text className="text-gray-500">{language.code}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{ position: "absolute", bottom: 10, right: 10, zIndex: 1000 }}
        onPress={() => navigation.navigate("Welcome")}
      >
        <View className="w-12 h-12 rounded-full bg-green-700 items-center justify-center shadow-lg">
          <ArrowRight outlineColor="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoadingScreen;
