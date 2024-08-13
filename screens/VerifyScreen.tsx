import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { ArrowRight, More } from "@/assets/icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone, faPhoneSlash } from "@fortawesome/free-solid-svg-icons";

export default function VerifyScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 20,
        alignItems: "center",
        gap: 20,
      }}
    >
      <View className="flex-row items-center justify-between w-full gap-x-2 px-5">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rotate-180"
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
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 24,
          gap: 20,
        }}
      > */}
      <View className="px-8 space-y-6 flex items-center">
        <View className="w-14 h-14 rounded-full bg-green-300 items-center justify-center">
          <FontAwesomeIcon icon={faPhoneSlash} color="green" size={30} />
        </View>
        <Text className="text-center leading-6 font-bold text-xl">
          To automatically verify with a missed call to your phone:
        </Text>
        <View className="space-y-4 flex items-center">
          <View className="flex-row items-center gap-x-4">
            <View>
              <FontAwesomeIcon icon={faPhone} color="green" />
            </View>
            <View>
              <Text className="text-base">
                <Text className="font-bold">
                  Allow WhatsApp to manage this call
                </Text>{" "}
                so we can call your phone number and end the call automatically.
              </Text>
            </View>
          </View>
          <View className="flex-row items-center gap-x-4">
            <View>
              <FontAwesomeIcon icon={faPhoneSlash} color="green" />
            </View>
            <View>
              <Text className="text-base">
                <Text className="font-bold">
                  Allow WhatsApp to do one time check
                </Text>{" "}
                and access your call log so we can confirm that you received the
                call.
              </Text>
            </View>
          </View>
        </View>
        <Text className="text-gray-600 text-base text-center">
          Learn more about how you can manage your{" "}
          <Text className="text-green-600">
            phone verification permissions.
          </Text>
        </Text>
        <View className="w-[240px] space-y-3">
          <TouchableOpacity
            onPress={() => navigation.navigate("Calling")}
            className="w-full h-11 bg-green-600 rounded flex items-center justify-center"
          >
            <Text className="text-white text-base font-semibold text-center uppercase">
              continue
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Otp")}
            className="w-full h-11 bg-white border border-neutral-400 rounded flex items-center justify-center"
          >
            <Text className="text-green-600 text-base font-semibold text-center uppercase">
              verify with sms
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
