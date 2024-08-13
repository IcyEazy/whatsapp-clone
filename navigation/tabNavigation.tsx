import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  UpdatesScreen,
  CallsScreen,
  AllChatsScreen,
  CommunitiesScreen,
  SettingsScreen,
} from "@/screens";
import { Chats, Communities, Phone, Settings, Updates } from "@/assets/icons";
import { useSelector } from "react-redux";
import { selectUnRead } from "@/redux/slices/unReadSlice";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const [unread, setUnread] = useState({
    chats: 0,
    calls: 0,
    groups: 0,
  });

  const { chats, calls, groups } = useSelector(selectUnRead);
  useEffect(() => {
    console.log("Chats: ", chats, "Missed Calls: ", calls, "Groups: ", groups);
    setUnread({ chats: chats, calls: calls, groups: groups });
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Tab.Navigator
        initialRouteName="Chats"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Updates"
          component={UpdatesScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Updates fillColor={focused ? "black" : "gray"} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Calls"
          component={CallsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="relative">
                <Phone fillColor={focused ? "black" : "gray"} />
                {unread.calls > 0 && (
                  <Text className="absolute -top-1 -right-3 text-white bg-red-700 py-[1px] px-1 rounded-lg text-xs">
                    {unread.calls}
                  </Text>
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Communities"
          component={CommunitiesScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="relative">
                <Communities fillColor={focused ? "black" : "gray"} />
                {unread.groups > 0 && (
                  <Text className="absolute -top-1 -right-3 text-white bg-red-700 py-[1px] px-1 rounded-lg text-xs">
                    {unread.groups}
                  </Text>
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={AllChatsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="relative">
                <Chats fillColor={focused ? "black" : "gray"} />
                {unread.chats > 0 && (
                  <Text className="absolute -top-1 -right-3 text-white bg-red-700 py-[1px] px-1 rounded-lg text-xs">
                    {unread.chats}
                  </Text>
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Settings fillColor={focused ? "black" : "gray"} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
}
