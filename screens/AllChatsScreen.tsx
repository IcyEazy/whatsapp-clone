import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  PanResponder,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArchive,
  faCamera,
  faCheckDouble,
  faEdit,
  faSearch,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { chats as initialChats } from "@/constants/chats";
import { formatTimestamp } from "@/helper";
import { useAppDispatch } from "@/redux/hooks";
import { setUnRead } from "@/redux/slices/unReadSlice";

export default function AllChatsScreen() {
  const [chats, setChats] = useState(initialChats);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [edit, setEdit] = useState(false);
  const [selectedChats, setSelectedChats] = useState<number[]>([]);
  const previousScrollOffset = useRef(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const noOfUnreadChats = chats.filter((chat) => chat.unread === true).length;
    if (noOfUnreadChats > 0) {
      const totalUnreadMessages = chats
        .filter((chat) => chat.unread === true)
        .reduce((acc, chat) => acc + chat.lastMessage.length, 0);
      console.log("Unread Messages: ", totalUnreadMessages);
      dispatch(
        setUnRead({ chats: totalUnreadMessages, calls: null, groups: null })
      );
    }
  }, [dispatch]);

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

  // Handle search text change
  const handleSearchText = (text: string) => {
    setSearchText(text);
    // console.log(text);
  };

  // Handle select category
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSelectedChats = (index: number) => {
    // console.log("index: ", index);
    // Create a copy of the current selected chats array
    let newArray = [...selectedChats];
    // Check if the index is already in the array
    if (newArray.includes(index)) {
      // If it is, remove it
      newArray = newArray.filter((ind) => ind !== index);
    } else {
      // If it's not, add it
      newArray.push(index);
    }
    // Update the state with the new array
    setSelectedChats(newArray);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        // Check for left or right swipe
        if (gestureState.dx > 10) {
          console.log("Swiped right");
        } else if (gestureState.dx < -10) {
          console.log("Swiped left");
        }
      },
      onPanResponderRelease: () => {
        // Handle release logic if needed
      },
    })
  ).current;

  // Filter chats based on search text and selected category
  const filteredChats =
    selectedCategory === "All" || selectedCategory === "Groups"
      ? chats
      : chats.filter((chat) => chat.unread === true);

  const searchedChats = searchText
    ? filteredChats.filter((chat) => {
        return chat.name.toLowerCase().includes(searchText.toLowerCase());
        // chat.lastMessage.map((message) =>
        //   message.toLowerCase().includes(searchText.toLowerCase())
        // )
      })
    : filteredChats;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View className="flex-row items-center gap-x-3 justify-between py-3 px-4 bg-[#f9f9f9]">
        <Pressable onPress={() => setEdit(!edit)}>
          <Text className="text-base">{edit ? "Done" : "Edit"}</Text>
        </Pressable>
        <Text
          className={`text-lg font-bold opacity-0 ${
            isScrollingDown && !isAtTop && "opacity-100"
          }`}
        >
          Chats
        </Text>
        <View className="flex-row items-center gap-x-4">
          <TouchableOpacity>
            <FontAwesomeIcon icon={faCamera} size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faEdit} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
        onScroll={handleScroll}
        // scrollEventThrottle={16}
      >
        <View className="bg-[#f9f9f9] px-4 pb-4 border-b border-gray-300 space-y-3 ">
          {(selectedChats.length === 0 || !edit) && (
            <Text className="text-3xl font-bold">Chats</Text>
          )}
          {edit && selectedChats.length > 0 && (
            <Text className="text-3xl font-bold">
              {selectedChats.length} Selected
            </Text>
          )}
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
        <View className="flex-row items-center gap-x-2 my-2 pl-4">
          {["All", "Unread", "Groups"].map((category, index) => {
            return (
              <TouchableOpacity
                key={index}
                className={`${
                  selectedCategory === category
                    ? "bg-green-300"
                    : "bg-neutral-200"
                } px-2.5 py-1 rounded-2xl`}
                onPress={() => handleSelectCategory(category)}
              >
                <Text className="text-sm font-bold text-black">{category}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View className="flex-row items-center gap-x-2 justify-between pl-7 pr-5 mt-3">
          <View
            style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            className=""
          >
            <FontAwesomeIcon icon={faArchive} size={19} color="gray" />
            <Text className="text-base font-bold">Archived</Text>
          </View>
          <Text className="text-green-700">1</Text>
        </View>
        <View className="mt-4">
          {searchedChats?.map((chat, index) => {
            return (
              <TouchableOpacity
                {...panResponder.panHandlers}
                onPress={() => handleSelectedChats(index)}
                key={index}
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  paddingBottom: 10,
                }}
              >
                {edit && (
                  <View
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 100,
                      borderColor: selectedChats.includes(index)
                        ? "green"
                        : "gray",
                    }}
                    className={`ml-3 border flex items-center justify-center ${
                      selectedChats.includes(index)
                        ? "bg-green-700"
                        : "bg-transparent"
                    }`}
                  >
                    {selectedChats.includes(index) && (
                      <FontAwesomeIcon icon={faCheck} color="white" size={10} />
                    )}
                  </View>
                )}
                <View className={`${!edit && "pl-3"}`}>
                  <Image
                    source={{ uri: chat.image }}
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
                    <Text className="text-lg font-bold">{chat.name}</Text>
                    <Text className="text-base text-gray-400">
                      {formatTimestamp(chat.time)}
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
                    {chat.lastMessage && (
                      <Text
                        className="leading-5 text-gray-800 w-[80%]"
                        numberOfLines={2}
                      >
                        {chat.isOwner && (
                          <FontAwesomeIcon
                            icon={faCheckDouble}
                            size={10}
                            color="blue"
                          />
                        )}{" "}
                        {chat.lastMessage[chat.lastMessage.length - 1]}
                      </Text>
                    )}
                    {!chat.isOwner && chat.unread && (
                      <View
                        style={{
                          alignItems: "center",
                          height: 20,
                          paddingHorizontal: 6,
                        }}
                        className="bg-green-600 text-white rounded-full"
                      >
                        <Text className=" text-sm text-center text-white">
                          {chat.lastMessage.length}
                        </Text>
                      </View>
                    )}
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
