import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  LoadingScreen,
  WelcomeScreen,
  LoginScreen,
  VerifyScreen,
  OtpScreen,
  UploadScreen,
} from "@/screens";
import tabNavigation from "./tabNavigation";
import CallingScreen from "@/screens/CallingScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Verify" component={VerifyScreen} />
      <Stack.Screen name="Calling" component={CallingScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="Upload" component={UploadScreen} />
      <Stack.Screen name="AllChats" component={tabNavigation} />
    </Stack.Navigator>
  );
}
