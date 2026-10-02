import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const BottomNav = ({ navigation, active }) => (
  <View style={styles.bottomBar}>
    {[
      { label: "Home", screen: "Home" },
      { label: "Books", screen: "Books" },
      { label: "Favorites", screen: "Favorites" },
      { label: "About", screen: "About" },
    ].map((item) => {
      const selected = active === item.label;
      return (
        <TouchableOpacity
          key={item.label}
          style={[styles.navItem, selected && styles.navItemActive]}
          onPress={() => navigation.navigate(item.screen)}
          activeOpacity={0.8}
        >
          <Text style={[styles.navText, selected && styles.navTextActive]}>{item.label}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require("../assets/images/about.png")} style={styles.image} />

        <Text style={styles.heading}>About Book Library</Text>
        <Text style={styles.text}>
          This is a simple book library application where users can discover books by category,
          search for titles or authors, view detailed information, and save favorite books.
        </Text>

        <Text style={styles.label}>Developed by:</Text>
        <Text style={styles.name}>Darshil Patel</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Contact")}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNav navigation={navigation} active="About" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  content: {
    padding: 20,
    paddingBottom: 90,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 20,
  },
  heading: {
    color: "#222222",
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 12,
    textAlign: "center",
  },
  text: {
    color: "#666666",
    fontSize: 15,
    lineHeight: 23,
    textAlign: "center",
    marginBottom: 16,
  },
  label: {
    color: "#1976D2",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 10,
  },
  name: {
    color: "#222222",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 6,
    marginBottom: 18,
  },
  button: {
    backgroundColor: "#1976D2",
    borderRadius: 10,
    minHeight: 46,
    paddingHorizontal: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 68,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 10,
  },
  navItemActive: {
    backgroundColor: "#EAF3FC",
  },
  navText: {
    color: "#666666",
    fontSize: 13,
    fontWeight: "600",
  },
  navTextActive: {
    color: "#1976D2",
    fontWeight: "700",
  },
});
