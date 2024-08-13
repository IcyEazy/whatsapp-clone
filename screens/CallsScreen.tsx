import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faInfo,
  faInfoCircle,
  faLink,
  faPhone,
  faPhoneSlash,
  faSearch,
  faVideo,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { TextInput } from "react-native";
import { calls as initialCalls } from "@/constants/calls";
import { Image } from "react-native";
import { formatTimestamp } from "@/helper";
import { useAppDispatch } from "@/redux/hooks";
import { setUnRead } from "@/redux/slices/unReadSlice";

export default function CallsScreen() {
  const [calls, setCalls] = useState(initialCalls);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    const noOfMissedCalls = calls.filter(
      (call) => call.type === "Missed"
    ).length;
    if (noOfMissedCalls > 0) {
      console.log("Missed calls: ", noOfMissedCalls);
      dispatch(
        setUnRead({ calls: noOfMissedCalls, groups: null, chats: null })
      );
    }
  }, [dispatch, calls]);

  // Handle search text change
  const handleSearchText = (text: string) => {
    setSearchText(text);
    // console.log(text);
  };

  // Handle select category
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  // Filter chats based on search text and selected category
  const filteredCalls =
    selectedCategory === "All"
      ? calls
      : calls.filter((call) => call?.type?.toLowerCase() === "missed");

  const searchedCalls = searchText
    ? filteredCalls.filter((call) => {
        return call.name.toLowerCase().includes(searchText.toLowerCase());
      })
    : filteredCalls;

  const sortByTime = (a: any, b: any) => {
    return new Date(b?.time).getTime() - new Date(a?.time).getTime();
  };

  const sortedCallsByTime = searchedCalls.sort(sortByTime);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <View className="flex-row items-center gap-x-3 justify-between py-3 px-4 bg-[#f9f9f9]">
        <Pressable>
          <Text className="text-base">Edit</Text>
        </Pressable>
        <View className="flex-row items-center border border-black rounded">
          {["All", "Missed"].map((category, index) => {
            return (
              <TouchableOpacity
                key={index}
                className={`${
                  selectedCategory === category ? "bg-black" : "bg-transparent"
                } h-8 w-[70px] flex items-center justify-center`}
                onPress={() => handleSelectCategory(category)}
              >
                <Text
                  className={`text-sm ${
                    selectedCategory === category ? "text-white" : "text-black"
                  }`}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faPhoneSlash} size={20} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        <View className="bg-[#f9f9f9] px-4 pb-4 border-b border-gray-300 space-y-3 ">
          <Text className="text-3xl font-bold">Calls</Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            className="h-10 bg-neutral-200 rounded px-2"
          >
            <FontAwesomeIcon icon={faSearch} size={16} color="gray" />
            <TextInput
              value={searchText}
              onChangeText={handleSearchText}
              placeholder="Search"
              className="text-lg flex-1"
            />
          </View>
        </View>
        <View className="flex-row items-center gap-x-2 px-4 py-2 bg-white border-b border-gray-300">
          <View className="flex-row items-center justify-center w-10 h-10 bg-gray-300 rounded-full">
            <FontAwesomeIcon icon={faLink} size={18} color="gray" />
          </View>
          <View>
            <Text className="text-base font-medium">Create call link</Text>
            <Text className="text-gray-700 text-xs">
              Share a link for your WhatsApp call
            </Text>
          </View>
        </View>
        <Text className="font-bold px-4 py-2 text-base">Recent</Text>
        <View className="bg-white border-t border-gray-300">
          {sortedCallsByTime?.map((call, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  paddingBottom: 10,
                }}
              >
                <View className="pl-3">
                  <Image
                    source={{ uri: call.image }}
                    className="w-12 h-12 rounded-full"
                    resizeMethod="resize"
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                  className="border-b border-gray-300 py-1 pr-3"
                >
                  <View>
                    <Text
                      className={`text-base font-medium ${
                        call.type === "Missed" && "text-red-600"
                      }`}
                    >
                      {call.name}
                    </Text>
                    <View className="flex-row items-center gap-x-2">
                      <View className={`${call.mode === "Audio" && "hidden"}`}>
                        <FontAwesomeIcon
                          icon={faVideo}
                          size={12}
                          color="gray"
                        />
                      </View>
                      <View className={`${call.mode === "Video" && "hidden"}`}>
                        <FontAwesomeIcon
                          icon={faPhone}
                          size={12}
                          color="gray"
                        />
                      </View>
                      <Text className="text-xs text-gray-700">{call.type}</Text>
                    </View>
                  </View>
                  <View className="flex-row items-center gap-x-2">
                    <Text className="text-gray-700">
                      {formatTimestamp(call.time)}
                    </Text>
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      size={20}
                      color="gray"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
