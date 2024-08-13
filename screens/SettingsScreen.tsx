import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBarcode,
  faSearch,
  faPerson,
  faMicrophone,
  faStar,
  faLaptop,
  faKey,
  faLock,
  faMessage,
  faBell,
  faArrowsUpDown,
  faI,
  faHeart,
  faCamera,
  faGear,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "@/redux/hooks";
import { selectUpload } from "@/redux/slices/uploadSlice";
import { Facebook, Instagram } from "@/assets/icons";

export default function SettingsScreen() {
  const [imageUri, setImageUri] = useState<string>();
  const [fullName, setFullName] = useState<string>("");
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

  const { full_name, image_url } = useAppSelector(selectUpload);
  //   console.log(full_name, image_url);
  useEffect(() => {
    setFullName(full_name);
    setImageUri(image_url);
  }, []);

  // Handle search text change
  const handleSearchText = (text: string) => {
    setSearchText(text);
    console.log(text);
  };

  const settings = [
    {
      id: 1,
      name: "Avatar",
      icon: faPerson,
      bg_color: "bg-blue-600",
    },
    {
      id: 2,
      name: "Broadcast lists",
      icon: faMicrophone,
      bg_color: "bg-green-600",
    },
    {
      id: 3,
      name: "Starred messages",
      icon: faStar,
      bg_color: "bg-yellow-600",
    },
    {
      id: 4,
      name: "Linked devices",
      icon: faLaptop,
      bg_color: "bg-teal-600",
    },
    {
      id: 5,
      name: "Account",
      icon: faKey,
      bg_color: "bg-blue-600",
    },
    {
      id: 6,
      name: "Privacy",
      icon: faLock,
      bg_color: "bg-teal-600",
    },
    {
      id: 7,
      name: "Chats",
      icon: faMessage,
      bg_color: "bg-green-600",
    },
    {
      id: 8,
      name: "Notifications",
      icon: faBell,
      bg_color: "bg-red-600",
    },
    {
      id: 9,
      name: "Storage and data",
      icon: faArrowsUpDown,
      bg_color: "bg-green-600",
    },
    {
      id: 10,
      name: "Help",
      icon: faI,
      bg_color: "bg-blue-600",
    },
    {
      id: 11,
      name: "Tell a friend",
      icon: faHeart,
      bg_color: "bg-red-600",
    },
  ];
  const socials = [
    {
      id: 1,
      name: "Open Instagram",
      logo: Instagram,
    },
    {
      id: 2,
      name: "Open Facebook",
      logo: Facebook,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        className={`${
          isScrollingDown && !isAtTop && "border-b-[0.5px] border-gray-400"
        } py-2 px-4 bg-[#f9f9f9]`}
      >
        <Text
          className={`text-lg font-bold text-center opacity-0 ${
            isScrollingDown && !isAtTop && "opacity-100"
          }`}
        >
          Settings
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        // scrollEventThrottle={16}
        contentContainerStyle={{
          backgroundColor: "#f4f5f5",
        }}
      >
        <View className="bg-[#f9f9f9] px-4 pb-4 border-b border-gray-300 space-y-3 ">
          <Text className="text-3xl font-bold">Settings</Text>
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
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            paddingHorizontal: 16,
            paddingVertical: 3,
            backgroundColor: "white",
          }}
          className="border-b border-gray-300"
        >
          <Image
            source={{ uri: imageUri }}
            className="w-12 h-12 rounded-full"
          />
          <View style={{ flex: 1 }} className="">
            <Text className="text-lg font-semiboldbold">{fullName}</Text>
            <Text className="text-sm text-gray-500 -mt-1" numberOfLines={1}>
              B.Sc Civil Engineering | Frontend & React Native Developer
            </Text>
          </View>
          <View className="w-7 h-7 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
            <FontAwesomeIcon icon={faBarcode} color="black" size={14} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            paddingHorizontal: 16,
            paddingVertical: 7,
            backgroundColor: "white",
          }}
          className="border-b border-gray-300"
        >
          <View
            className={`w-[26px] h-[26px] ${settings[0].bg_color} rounded-md flex items-center justify-center`}
          >
            <FontAwesomeIcon icon={settings[0].icon} color="white" size={18} />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text className="text-sm">{settings[0].name}</Text>
            <FontAwesomeIcon icon={faChevronRight} color="gray" size={11} />
          </View>
        </TouchableOpacity>
        <View className="mt-8 bg-white border-t border-b border-gray-300 py-2">
          {settings.slice(1, 4).map((setting, index) => {
            return (
              <TouchableOpacity key={index}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <View
                    className={`w-[26px] h-[26px] ml-4 ${setting.bg_color} rounded-md flex items-center justify-center`}
                  >
                    <FontAwesomeIcon
                      icon={setting.icon}
                      color="white"
                      size={18}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingRight: 16,
                    }}
                  >
                    <Text className="text-sm">{setting.name}</Text>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      color="gray"
                      size={11}
                    />
                  </View>
                </View>
                {index !== 2 && (
                  <View className="h-[1px] bg-gray-300 my-2 ml-[58px]" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
        <View className="mt-8 bg-white border-t border-b border-gray-300 py-2">
          {settings.slice(4, 9).map((setting, index) => {
            return (
              <TouchableOpacity key={index}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <View
                    className={`w-[26px] h-[26px] ml-4 ${setting.bg_color} rounded-md flex items-center justify-center`}
                  >
                    <FontAwesomeIcon
                      icon={setting.icon}
                      color="white"
                      size={14}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingRight: 16,
                    }}
                  >
                    <Text className="text-sm">{setting.name}</Text>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      color="gray"
                      size={11}
                    />
                  </View>
                </View>
                {index !== 4 && (
                  <View className="h-[1px] bg-gray-300 my-2 ml-[58px]" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
        <View className="mt-8 bg-white border-t border-b border-gray-300 py-2">
          {settings.slice(9).map((setting, index) => {
            return (
              <TouchableOpacity key={index}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <View
                    className={`w-[26px] h-[26px] ml-4 ${setting.bg_color} rounded-md flex items-center justify-center`}
                  >
                    <FontAwesomeIcon
                      icon={setting.icon}
                      color="white"
                      size={14}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingRight: 16,
                    }}
                  >
                    <Text className="text-sm">{setting.name}</Text>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      color="gray"
                      size={11}
                    />
                  </View>
                </View>
                {index !== 1 && (
                  <View className="h-[1px] bg-gray-300 my-2 ml-[58px]" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
        <Text className="uppercase text-gray-500 text-sm mt-6 px-4 pb-1">
          also from meta
        </Text>
        <View className="bg-white border-t border-b border-gray-300 py-2 mb-8">
          {socials.map((setting, index) => {
            return (
              <TouchableOpacity key={index}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <View className={`ml-4`}>
                    {<setting.logo width={20} height={20} />}
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingRight: 16,
                    }}
                  >
                    <Text className="text-sm">{setting.name}</Text>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      color="gray"
                      size={11}
                    />
                  </View>
                </View>
                {index !== 1 && (
                  <View className="h-[1px] bg-gray-300 my-2 ml-[58px]" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
