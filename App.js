import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainGameScreen from "./screens/MainGameScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFB563",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 50,
  },
});
