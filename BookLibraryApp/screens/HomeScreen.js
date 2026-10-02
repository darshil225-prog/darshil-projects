import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import books from "../data/books";
import BookCard from "../components/BookCard";
import CategoryButton from "../components/CategoryButton";

const categories = ["Technology", "Education", "Fiction", "Biography", "Science"];

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

export default function HomeScreen({ navigation, favorites, onFavorite }) {
  const popularBooks = books.slice(0, 4);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>WELCOME TO</Text>
        <Text style={styles.heading}>Book Library</Text>
        <Text style={styles.subtitle}>
          Discover new reads, explore your favorite categories, and save books you love.
        </Text>

        <Image source={require("../assets/images/library.png")} style={styles.libraryImage} />

        <View style={styles.sectionHeadingRow}>
          <Text style={styles.sectionTitle}>Popular Books</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Books")}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularRow}>
          {popularBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              navigation={navigation}
              onFavorite={onFavorite}
              isFavorite={favorites.some((favorite) => favorite.id === book.id)}
              compact
            />
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoryRow}>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              name={category}
              selected={false}
              onPress={() => navigation.navigate("Books", { category })}
            />
          ))}
        </View>
      </ScrollView>

      <BottomNav navigation={navigation} active="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 90,
  },
  eyebrow: {
    color: "#1976D2",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    marginTop: 4,
  },
  heading: {
    color: "#222222",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 8,
  },
  subtitle: {
    color: "#666666",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 18,
  },
  libraryImage: {
    width: "100%",
    height: 170,
    borderRadius: 12,
    marginBottom: 26,
  },
  sectionHeadingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  sectionTitle: {
    color: "#222222",
    fontSize: 20,
    fontWeight: "800",
  },
  seeAll: {
    color: "#1976D2",
    fontSize: 14,
    fontWeight: "700",
  },
  popularRow: {
    marginBottom: 22,
  },
  categoryRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
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
