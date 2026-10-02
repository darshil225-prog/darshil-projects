import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function BookDetailScreen({ route, favorites, onFavorite }) {
  const { book } = route.params;
  const isFavorite = favorites.some((favorite) => favorite.id === book.id);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.imageWrapper}>
        <Image source={book.image} style={styles.image} resizeMode="contain" />
      </View>

      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>By {book.author}</Text>

      <View style={styles.categoryBadge}>
        <Text style={styles.categoryText}>{book.category}</Text>
      </View>

      <Text style={styles.heading}>Description</Text>
      <Text style={styles.description}>{book.description}</Text>

      <TouchableOpacity style={styles.button} onPress={() => onFavorite(book)}>
        <Text style={styles.buttonText}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  imageWrapper: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  image: {
    width: 200,
    height: 260,
  },
  title: {
    color: "#222222",
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 6,
  },
  author: {
    color: "#666666",
    fontSize: 16,
    marginBottom: 10,
  },
  categoryBadge: {
    backgroundColor: "#EAF3FC",
    borderRadius: 999,
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 18,
  },
  categoryText: {
    color: "#1976D2",
    fontSize: 13,
    fontWeight: "700",
  },
  heading: {
    color: "#222222",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 8,
  },
  description: {
    color: "#666666",
    fontSize: 15,
    lineHeight: 23,
  },
  button: {
    backgroundColor: "#1976D2",
    borderRadius: 10,
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});
