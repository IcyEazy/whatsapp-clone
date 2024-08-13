import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { ArrowRight, More } from "@/assets/icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { convertTimeToMinSecs, handleTimeCountDown } from "@/helper/Time";
import { useSelector } from "react-redux";
import { selectUpload } from "@/redux/slices/uploadSlice";

export default function OtpScreen() {
  const [timeRemaining, setTimeRemaining] = React.useState(300);
  const [opt, setOpt] = React.useState(Array(6).fill("").join(" "));
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { phone_number } = useSelector(selectUpload);

  useEffect(() => {
    setTimeout(() => {
      setOpt(Math.floor(100000 + Math.random() * 900000).toString());
    }, 2500);
    setTimeout(() => {
      navigation.navigate("Upload");
    }, 6000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleTimeCountDown(timeRemaining, setTimeRemaining, navigation);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeRemaining]);

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
        Waiting to automatically detect an SMS sent to {phone_number}.{" "}
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text className="text-green-600">Wrong number?</Text>
        </Pressable>
      </Text>
      <View className="w-[180px] h-10 border-b-2 border-green-600 flex-row items-center justify-center">
        <TextInput
          className="w-full text-center text-base"
          placeholder="__  __  __  __  __  __"
          value={opt}
          onChangeText={(text) => setOpt(text)}
          keyboardType="numeric"
          maxLength={6}
        />
      </View>
      <Text className="text-base -mt-2 text-center">Enter 6 digit code</Text>
      <View className="w-full space-y-4 mt-4">
        <View className="w-full border-b-2 border-neutral-600 px-3 pb-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-x-4">
            <FontAwesomeIcon icon={faMessage} color="gray" />
            <Text className="text-base">Resend SMS</Text>
          </View>
          <View className="">
            <Text className="text-base">
              {convertTimeToMinSecs(timeRemaining)}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center gap-x-4">
          <FontAwesomeIcon icon={faPhone} color="green" />
          <Pressable onPress={() => navigation.navigate("Calling")}>
            <Text className="text-base text-green-600">Call me</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
