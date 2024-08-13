import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowRight,
  faChevronRight,
  faCircle,
  faCircleDot,
  faDotCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Communities } from "@/assets/icons";
import { communities } from "@/constants/communities";
import { Image } from "react-native";
import { formatTimestamp } from "@/helper";
import { useAppDispatch } from "@/redux/hooks";
import { setUnRead } from "@/redux/slices/unReadSlice";

export default function CommunitiesScreen() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const previousScrollOffset = useRef(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const noOfUnreadChats = communities.filter(
      (community) => community.unread === true
    ).length;
    if (noOfUnreadChats > 0) {
      const totalUnreadMessages = communities
        .filter((community) => community.unread === true)
        .reduce((acc, community) => acc + community.last_messages.length, 0);
      console.log("Unread Group Messages: ", totalUnreadMessages);
      dispatch(
        setUnRead({ chats: null, calls: null, groups: totalUnreadMessages })
      );
    }
  }, [dispatch, communities]);

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

  const sortByTime = (a: any, b: any) => {
    return new Date(b?.time).getTime() - new Date(a?.time).getTime();
  };

  const sortedCommunities = communities.sort(sortByTime);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
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
          <Text className={`text-lg font-bold text-center`}>Communities</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        // scrollEventThrottle={16}
        contentContainerStyle={{
          backgroundColor: "#f4f5f5",
        }}
      >
        <View className=" bg-[#f9f9f9] px-4 pb-2 border-b border-gray-300 space-y-3 ">
          <Text className="text-3xl font-bold">Communities</Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: "lightgray",
          }}
          className="border-b border-gray-300"
        >
          <View className="relative w-[34px] h-[34px] rounded-md bg-gray-500 flex-row justify-center items-center">
            <Communities fillColor="white" />
            <View className="absolute -bottom-[1px] -right-[1px] w-4 h-4 bg-green-500 rounded-full flex-row items-center justify-center">
              <FontAwesomeIcon icon={faPlus} color="white" size={12} />
            </View>
          </View>
          <View style={{ flex: 1 }} className="">
            <Text className="text-base font-bold">New community</Text>
          </View>
        </TouchableOpacity>
        <View className="mt-4">
          {sortedCommunities.map((community, index) => {
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
                    source={{ uri: community.image }}
                    className="w-12 h-12 rounded-full"
                    resizeMethod="resize"
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{ flex: 1 }}
                  className="border-t border-gray-300 py-1 pr-3"
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 8,
                    }}
                  >
                    <Text className="text-lg font-bold">{community.name}</Text>
                    <Text className="text-base text-gray-400">
                      {formatTimestamp(community.time)}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 8,
                    }}
                  >
                    {community.last_messages && (
                      <Text
                        className="leading-5 text-gray-800 w-[80%]"
                        numberOfLines={1}
                      >
                        {
                          community.last_messages[
                            community.last_messages.length - 1
                          ]
                        }
                      </Text>
                    )}
                    {community.unread && (
                      <View
                        style={{
                          alignItems: "center",
                          height: 20,
                          paddingHorizontal: 6,
                        }}
                        className="bg-green-600 rounded-full"
                      >
                        <Text className="text-xs font-bold text-white text-center mt-[1px]">
                          {community.last_messages.length}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity className="flex-row items-center justify-between px-4 py-2.5 bg-white border-b border-gray-200">
          <Text className="text-neutral-700 text-[15px]">See all</Text>
          <FontAwesomeIcon icon={faChevronRight} color="gray" size={12} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
