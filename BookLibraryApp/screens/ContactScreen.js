import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

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

export default function ContactScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const sendMessage = () => {
    if (!name || !email || !message) {
      setSuccessMessage("Please fill in all fields before sending.");
      return;
    }

    setSuccessMessage("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require("../assets/images/reading.png")} style={styles.image} />

        <Text style={styles.heading}>Contact Us</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888"
        />

        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Message"
          multiline
          value={message}
          onChangeText={setMessage}
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>

        {successMessage ? <Text style={styles.success}>{successMessage}</Text> : null}
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
  },
  image: {
    width: "100%",
    height: 165,
    borderRadius: 12,
    marginBottom: 22,
  },
  heading: {
    color: "#222222",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 18,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 15,
    color: "#222222",
  },
  messageInput: {
    height: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#1976D2",
    borderRadius: 10,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  success: {
    marginTop: 14,
    color: "#1976D2",
    fontSize: 14,
    fontWeight: "600",
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
