import { StyleSheet, Text, View } from "react-native";

export default function PrimaryBtn({ placeholder }) {
  return (
    <View style={styles.btn}>
      <Text style={styles.btnText}>{placeholder}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#000000",
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  btnText: {
    color: "#ffffff",
  },
});
