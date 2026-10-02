import React, { useEffect, useState } from "react";
import { FlatList, Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import books from "../data/books";
import BookCard from "../components/BookCard";
import CategoryButton from "../components/CategoryButton";

const categories = ["All", "Technology", "Education", "Fiction", "Biography", "Science"];

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

export default function BooksScreen({ navigation, route, favorites, onFavorite }) {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(route.params?.category || "All");

  useEffect(() => {
    if (route.params?.category) {
      setSelectedCategory(route.params.category);
    }
  }, [route.params?.category]);

  const filteredBooks = books.filter((book) => {
    const text = searchText.toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(text) || book.author.toLowerCase().includes(text);
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.heading}>Books</Text>
        <TextInput
          style={styles.search}
          placeholder="Search Books"
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#888"
        />

        <View style={styles.categories}>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              name={category}
              selected={selectedCategory === category}
              onPress={() => setSelectedCategory(category)}
            />
          ))}
        </View>

        <FlatList
          data={filteredBooks}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <BookCard
              book={item}
              navigation={navigation}
              onFavorite={onFavorite}
              isFavorite={favorites.some((favorite) => favorite.id === item.id)}
            />
          )}
          ListEmptyComponent={<Text style={styles.empty}>No books found.</Text>}
        />
      </View>

      <BottomNav navigation={navigation} active="Books" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  inner: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 10,
  },
  heading: {
    color: "#222222",
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 12,
  },
  search: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
    fontSize: 15,
    color: "#222222",
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 14,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  listContent: {
    paddingBottom: 16,
  },
  empty: {
    color: "#666666",
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
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
