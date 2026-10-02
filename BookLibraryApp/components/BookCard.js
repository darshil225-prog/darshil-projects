import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function BookCard({ book, navigation, onFavorite, isFavorite, compact }) {
  return (
    <View style={[styles.card, compact && styles.compactCard]}>
      <View style={[styles.imageArea, compact && styles.compactImageArea]}>
        <Image source={book.image} style={styles.image} resizeMode="contain" />
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {book.title}
      </Text>

      <Text style={styles.author} numberOfLines={1}>
        {book.author}
      </Text>

      <Text style={styles.category}>{book.category}</Text>

      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => navigation.navigate("BookDetail", { book })}
      >
        <Text style={styles.detailsButtonText}>View Details</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.favoriteButton} onPress={() => onFavorite(book)}>
        <Text style={styles.favoriteButtonText}>{isFavorite ? "♥" : "♡"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    width: "48%",
    alignSelf: "flex-start",
  },
  compactCard: {
    width: 220,
    marginRight: 12,
    marginBottom: 0,
  },
  imageArea: {
    height: 190,
    backgroundColor: "#F5F7FA",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    overflow: "hidden",
  },
  compactImageArea: {
    height: 170,
  },
  image: {
    width: "88%",
    height: "90%",
  },
  title: {
    color: "#222222",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22,
    minHeight: 44,
  },
  author: {
    color: "#666666",
    fontSize: 13,
    marginTop: 4,
    marginBottom: 6,
  },
  category: {
    color: "#1976D2",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: "#1976D2",
    borderRadius: 8,
    minHeight: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  favoriteButton: {
    backgroundColor: "#EAF3FC",
    borderRadius: 8,
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "flex-end",
  },
  favoriteButtonText: {
    color: "#1976D2",
    fontSize: 20,
    fontWeight: "700",
  },
});
