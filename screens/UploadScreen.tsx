import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ArrowRight, More } from "@/assets/icons";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";
import { useAppDispatch } from "@/redux/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { setUpload } from "@/redux/slices/uploadSlice";

export default function UploadScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<{
    image_error: string;
    name_error: string;
  }>({
    image_error: "",
    name_error: "",
  });

  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setError({ image_error: "", name_error: "" });
    }
  };

  const handleUpload = () => {
    if (image && name) {
      setError({ image_error: "", name_error: "" });
      dispatch(
        setUpload({ full_name: name, image_url: image, phone_number: "" })
      );
      navigation.navigate("AllChats");
    }

    if (!image) {
      setError({ ...error, image_error: "Please upload your profile picture" });
    }

    if (!name) {
      setError({ ...error, name_error: "Please enter your full name" });
    }

    if (!image && !name) {
      setError({
        image_error: "Please upload your profile picture",
        name_error: "and enter your full name",
      });
    }
  };

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
          className="rotate-180"
        >
          <ArrowRight outlineColor="black" />
        </TouchableOpacity>
        <Text className="font-medium text-xl text-center text-green-700">
          Update Profile
        </Text>
        <View className="">
          <More />
        </View>
      </View>
      {error.image_error && !error.name_error && (
        <Text className="text-red-500 text-center text-base">
          {error.image_error}
        </Text>
      )}
      {error.name_error && !error.image_error && (
        <Text className="text-red-500 text-center text-base">
          {error.name_error}
        </Text>
      )}
      {error.image_error && error.name_error && (
        <Text className="text-red-500 text-center text-base">
          {error.image_error} {error.name_error}
        </Text>
      )}
      <View className="flex items-center">
        <Pressable onPress={pickImage}>
          <View
            style={{ borderWidth: 3, borderColor: "green" }}
            className="w-[100px] h-[100px] rounded-full flex items-center justify-center"
          >
            {!image && (
              <FontAwesomeIcon icon={faPlus} color="black" size={30} />
            )}
            {image && (
              <Image
                source={{ uri: image }}
                className="w-full h-full rounded-full object-cover"
              />
            )}
          </View>
        </Pressable>
        <Text className="text-center text-base mt-3">
          {image ? "Upload a different photo" : "Add a photo"}
        </Text>
      </View>
      <View className="w-[240px] h-10 border-b-2 border-green-600 flex-row items-center justify-center">
        <TextInput
          className="w-full text-center text-base"
          placeholder="Enter Your Full Name"
          keyboardType="default"
          maxLength={25}
          value={name}
          onChangeText={(text) => {
            setName(text);
            setError({ image_error: "", name_error: "" });
          }}
        />
      </View>
      <TouchableOpacity
        onPress={handleUpload}
        className="mt-10 w-24 h-9 bg-green-600 rounded flex items-center justify-center"
      >
        <Text className="text-white text-base font-semibold text-center uppercase">
          Continue
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
