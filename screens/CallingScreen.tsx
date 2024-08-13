import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { ArrowRight, More } from "@/assets/icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMessage,
  faPhone,
  faPhoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { selectUpload } from "@/redux/slices/uploadSlice";
import { convertTimeToMinSecs, handleTimeCountDown } from "@/helper/Time";

export default function CallingScreen() {
  const [timeRemaining, setTimeRemaining] = React.useState(300);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { phone_number } = useSelector(selectUpload);
  //   console.log(phone_number);

  useEffect(() => {
    const interval = setInterval(() => {
      handleTimeCountDown(timeRemaining, setTimeRemaining, navigation);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeRemaining]);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Upload");
    }, 6000);
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 24,
        alignItems: "center",
        gap: 20,
      }}
    >
      <View className="flex-row items-center justify-between w-full gap-x-2">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="opacity-0"
        >
          <ArrowRight outlineColor="black" />
        </TouchableOpacity>
        <Text className="font-medium text-xl text-center text-green-700">
          Verify your phone number
        </Text>
        <View className="">
          <More />
        </View>
      </View>
      <Text className="text-center text-base">
        Waiting to automatically detect a missed call to {phone_number}.{" "}
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text className="text-green-600">Wrong number?</Text>
        </Pressable>
      </Text>
      <View className="w-full flex items-center gap-y-8">
        <View className="w-full border-b-2 border-neutral-600 px-3 pb-3 flex items-center">
          <View className="flex items-center gap-y-8">
            <View className="w-14 h-14 rounded-full bg-green-300 items-center justify-center">
              <FontAwesomeIcon icon={faPhoneSlash} color="green" size={30} />
            </View>
            <Text className="text-base">Calling...</Text>
          </View>
        </View>
        <View className="flex-row items-center justify-between w-full">
          <View className="flex-row items-center gap-x-4">
            <FontAwesomeIcon icon={faMessage} color="green" />
            <Pressable onPress={() => navigation.navigate("Otp")}>
              <Text className="text-base text-green-600">Send SMS</Text>
            </Pressable>
          </View>
          <Text className="text-base">
            {convertTimeToMinSecs(timeRemaining)}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
