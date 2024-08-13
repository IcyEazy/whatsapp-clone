import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ArrowDownFilled } from "@/assets/icons";

const WelcomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 80,
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <View>
          <Image
            source={require("../assets/images/whatsapp-bg.jpg")}
            className="w-56 h-56 rounded-full"
          />
        </View>
        <Text className="text-[28px] font-bold mt-5">Welcome to WhatsApp</Text>
        <Text className="text-center leading-6">
          Read our{" "}
          <Text
            className="text-green-400"
            onPress={() => navigation.navigate("Privacy")}
          >
            Privacy Policy
          </Text>
          . Tap "Agree and Continue" to accept the
          <Text
            className="text-green-400"
            onPress={() => navigation.navigate("Terms")}
          >
            {" "}
            Terms of Service
          </Text>
        </Text>
        <Pressable
          className="w-[240px] h-12 flex items-center justify-center bg-green-600 rounded-md"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="uppercase text-white font-medium">
            Agree and Continue
          </Text>
        </Pressable>
        <View className="flex-row gap-x-2 items-center justify-center h-10 pl-1 pr-2.5 mt-6 rounded-3xl bg-neutral-200">
          <Image
            source={require("../assets/images/globe.png")}
            alt="globe"
            className=" w-6 h-6"
          />
          <Text className="font-medium text-green-500">English</Text>
          <View>
            <ArrowDownFilled fillColor="green" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WelcomeScreen;
