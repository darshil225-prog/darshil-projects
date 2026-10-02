import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CategoryButton({ name, selected, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, selected && styles.selectedButton]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, selected && styles.selectedText]}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#1976D2",
    borderRadius: 12,
    paddingVertical: 9,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: "#FFFFFF",
    minHeight: 40,
    justifyContent: "center",
  },
  selectedButton: {
    backgroundColor: "#1976D2",
  },
  text: {
    color: "#1976D2",
    fontSize: 13,
    fontWeight: "600",
  },
  selectedText: {
    color: "#FFFFFF",
  },
});
