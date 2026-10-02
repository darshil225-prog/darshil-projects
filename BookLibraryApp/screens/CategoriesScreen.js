import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const categories = ["Technology", "Education", "Fiction", "Biography", "Science"];

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>

      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={styles.button}
          onPress={() => navigation.navigate("Books", { category })}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    padding: 18,
  },
  heading: {
    color: "#222222",
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 18,
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    minHeight: 62,
    justifyContent: "center",
    paddingHorizontal: 18,
    marginBottom: 12,
  },
  buttonText: {
    color: "#1976D2",
    fontSize: 17,
    fontWeight: "700",
  },
});
