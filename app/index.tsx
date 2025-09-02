import { Redirect } from "expo-router";
import { View, Text } from "react-native";
import "./global.css"

export default function Index() {
  return <Redirect href="/(tabs)" />;
}
