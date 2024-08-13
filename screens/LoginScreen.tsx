import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useRef } from "react";
import { ArrowDownFilled, ArrowRight, More } from "@/assets/icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { countries } from "@/constants/countries";
import { useAppDispatch } from "@/redux/hooks";
import { setUpload } from "@/redux/slices/uploadSlice";

export default function LoginScreen() {
  const [showPopUp, setShowPopUp] = React.useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [countryDropdownOpen, setCountryDropdownOpen] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState("Nigeria");
  const [countryDialCode, setCountryDialCode] = React.useState("+234");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const countryDropdownRef = useRef<HTMLUListElement>(null);
  const dispatch = useAppDispatch();

  // const handleClickOutside = useCallback(
  //   (event: MouseEvent) => {
  //     if (countryDropdownOpen) {
  //       if (
  //         countryDropdownRef.current &&
  //         !countryDropdownRef.current.contains(event.target as Node)
  //       ) {
  //         setCountryDropdownOpen(false);
  //       }
  //     }
  //   },
  //   [countryDropdownOpen]
  // );
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [handleClickOutside]);

  const handleSelectCountry = (
    country: string,
    dialCode: string,
    countryName: string
  ) => {
    setSelectedCountry(countryName);
    setCountryDialCode(dialCode);
    setCountryDropdownOpen(false);
  };

  const handleShowPopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 16,
        alignItems: "center",
        gap: 20,
        position: "relative",
      }}
    >
      <View className="flex-row items-center justify-between w-full gap-x-2">
        <View className="opacity-0">
          <ArrowRight outlineColor="black" />
        </View>
        <Text className="font-medium text-xl text-center text-green-700">
          Enter your phone number
        </Text>
        <View className="">
          <More />
        </View>
      </View>
      <Text className="text-center leading-6 font-medium text-base">
        WhatsApp will need to verify your phone number.{" "}
        <Text className="text-green-400">What's your number?</Text>{" "}
      </Text>
      <View className="relative">
        <Pressable
          onPress={() => setCountryDropdownOpen(!countryDropdownOpen)}
          className="relative w-[240px] h-10 border-b-2 border-green-600 flex-row items-center justify-center"
        >
          <Text className="text-center font-medium text-base">
            {selectedCountry}
          </Text>
          <View className="absolute right-0 top-4 mr-1">
            <ArrowDownFilled fillColor="green" />
          </View>
        </Pressable>
        {countryDropdownOpen && (
          <ScrollView
            style={{
              maxHeight: 200,
              width: "80%",
              zIndex: 100,
              position: "absolute",
              top: "100%",
              backgroundColor: "white",
              borderRadius: 5,
              paddingHorizontal: 20,
            }}
          >
            <View className="">
              {countries.map((country, index) => (
                <Pressable
                  key={index}
                  className="py-3 hover:bg-gray-100 cursor-pointer"
                  onPress={() =>
                    handleSelectCountry(
                      country.code,
                      country.dial_code,
                      country.name
                    )
                  }
                >
                  <Text className="text-base">{country.name}</Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        )}
      </View>
      <View className="w-[240px] flex-row items-center justify-center gap-x-2">
        <View className="flex-[25%] h-10 border-b-2 border-green-600 flex-row items-center gap-x-3">
          {/* <Text className="text-center font-medium text-base">+</Text> */}
          <Text className="text-center font-medium text-base">
            {countryDialCode}
          </Text>
        </View>
        <View className="flex-[75%] h-10 border-b-2 border-green-600 flex-row items-center justify-center">
          <TextInput
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text);
              dispatch(
                setUpload({
                  full_name: "",
                  image_url: "",
                  phone_number: `${countryDialCode}${text}`,
                })
              );
            }}
            placeholder="phone number"
            className="w-full text-base"
          />
        </View>
      </View>
      <Text className="text-gray-400">Carrier charges may apply</Text>
      <Pressable
        onPress={handleShowPopUp}
        className="py-2 px-3 bg-green-700 rounded"
      >
        <Text className="text-white uppercase font-semibold text-base">
          next
        </Text>
      </Pressable>
      {showPopUp && (
        <View className="absolute top-1/3 flex flex-row items-center justify-center">
          <View className="w-[300px] py-4 px-5 space-y-4 bg-white rounded shadow-lg">
            <Text className="text-gray-600 text-base">
              You entered the phone number:
            </Text>
            <Text className=" text-base">
              {countryDialCode}
              {phoneNumber}
            </Text>
            <Text className="text-gray-600 text-base">
              Is this Ok, or would you like to edit the number?
            </Text>
            <View className="flex-row items-center justify-between">
              <Pressable onPress={() => setShowPopUp(false)}>
                <Text className="text-green-600 uppercase">Edit</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("Verify")}>
                <Text className="text-green-600 uppercase">ok</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
