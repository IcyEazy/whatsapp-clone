import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import { useAppSelector } from "@/redux/hooks";
import { selectUpload } from "@/redux/slices/uploadSlice";
import { Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCamera,
  faDotCircle,
  faEllipsis,
  faHandDots,
  faPen,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { status as initialStatus } from "@/constants/status";
import { CircularBorderLine, StatusBorderLine, timeDiff } from "@/helper";

export default function UpdatesScreen() {
  const [status, setStatus] = useState(initialStatus);
  const [imageUri, setImageUri] = useState<string>();
  const [searchText, setSearchText] = useState("");
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const previousScrollOffset = useRef(0);

  const handleScroll = (event: any) => {
    const currentOffset = event.nativeEvent.contentOffset.y;

    // Detect when the user starts scrolling down
    if (currentOffset > previousScrollOffset.current && !isScrollingDown) {
      setIsScrollingDown(true);
      //   console.log("Started scrolling down");
    }

    // Detect when the user reaches the top of the scroll view
    if (currentOffset === 0 && !isAtTop) {
      setIsAtTop(true);
      //   console.log("Reached top of the screen");
    } else if (currentOffset !== 0 && isAtTop) {
      setIsAtTop(false);
    }

    previousScrollOffset.current = currentOffset;
  };

  const { image_url } = useAppSelector(selectUpload);
  //   console.log(full_name, image_url);
  useEffect(() => {
    setImageUri(image_url);
  }, []);

  const sortByTime = (a: any, b: any) => {
    return new Date(b?.time).getTime() - new Date(a?.time).getTime();
  };

  const sortedStatusByTime = status.sort(sortByTime);

  // Handle search text change
  const handleSearchText = (text: string) => {
    setSearchText(text);
    // console.log(text);
  };

  const searchedStatus = searchText
    ? sortedStatusByTime.filter((status) =>
        status.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : sortedStatusByTime;

  const handleAddStatus = (name: string, image: string) => {
    setStatus([
      ...status,
      {
        id: status.length + 1,
        name,
        image,
        time: new Date().toISOString(),
      },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        className={`${
          isScrollingDown && !isAtTop && "border-b-[0.5px] border-gray-400"
        } py-2 px-4 bg-[#f9f9f9] `}
      >
        <View
          className={`flex-row justify-between items-center opacity-0 ${
            isScrollingDown && !isAtTop && "opacity-100"
          }`}
        >
          <Text className="opacity-0">Text</Text>
          <Text className={`text-lg font-bold text-center`}>Updates</Text>
          <Pressable>
            <FontAwesomeIcon icon={faEllipsis} size={16} color="black" />
          </Pressable>
        </View>
      </View>
      {/* <View>
        <StatusBorderLine lines={90} />
        <Text>WhatsApp Status Display</Text>
      </View> */}
      {/* <View style={styles.screen}>
        <CircularBorderLine segments={5} />
        <Text>WhatsApp Status Display</Text>
      </View> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        // scrollEventThrottle={16}
        contentContainerStyle={{
          backgroundColor: "#f4f5f5",
        }}
      >
        <View className="bg-[#f9f9f9] px-4 pb-4 border-b border-gray-300 space-y-3 ">
          <Text className="text-3xl font-bold">Updates</Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            className="h-8 bg-neutral-200 rounded px-2"
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
        <Text className="text-lg font-bold px-4 pt-4 pb-3">Status</Text>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: "white",
          }}
          className="border-b border-gray-300"
        >
          <View className="relative">
            <Image
              source={{ uri: imageUri }}
              className="w-12 h-12 rounded-full"
            />
            <View className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full flex-row items-center justify-center">
              <FontAwesomeIcon icon={faPlus} color="white" size={12} />
            </View>
          </View>
          <View style={{ flex: 1 }} className="">
            <Text className="text-base font-semiboldbold">My status</Text>
            <Text className="text-sm text-gray-500 -mt-1">
              Add to my status
            </Text>
          </View>
          <View className="flex-row items-center gap-2">
            <TouchableOpacity className="w-7 h-7 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
              <FontAwesomeIcon icon={faCamera} color="black" size={14} />
            </TouchableOpacity>
            <TouchableOpacity className="w-7 h-7 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
              <FontAwesomeIcon icon={faPen} color="black" size={14} />
            </TouchableOpacity>
          </View>
        </Pressable>
        <Text className="text-gray-700 text-xs px-4 pt-3 pb-2 uppercase">
          Recent updates
        </Text>

        <View className="bg-white">
          {searchedStatus?.map((status, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  // paddingVertical: 10,
                  paddingLeft: 13,
                }}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: 50,
                    borderColor: "green",
                    borderStyle:
                      index % 2 === 0
                        ? "dashed"
                        : index % 3 === 0
                        ? "dotted"
                        : "solid",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className={`w-12 h-12 rounded-full`}
                >
                  <Image
                    source={{ uri: status.image }}
                    className="w-[40px] h-[40px] rounded-full"
                    resizeMethod="resize"
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{ flex: 1 }}
                  className={`${
                    index !== searchedStatus.length - 1 && "border-b"
                  } border-gray-300 py-4 pr-3`}
                >
                  <View>
                    <Text className="text-[15px] font-bold">{status.name}</Text>
                    <Text className="text-xs text-gray-600">
                      {timeDiff(status.time)}
                    </Text>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
  },
});
