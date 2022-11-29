import { StyleSheet, View, TextInput, Image } from "react-native";

import PrimaryBtn from "../components/Buttons/PrimaryBtn";

export default function MainGameScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2452/2452694.png",
          }}
        />
      </View>
      <View style={styles.inputBox}>
        <TextInput placeholder="Enter the number" style={styles.inputBoxText} />
        <PrimaryBtn placeholder="Start" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 140,
  },
  inputBox: {
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    height: 50,
    borderRadius: 6,
    paddingHorizontal: 20,

    // shadow for andriod device
    elevation: 3,

    // shadow for ios device
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },
  inputBoxText: {
    width: "82%",
    height: "100%",
  },
});
