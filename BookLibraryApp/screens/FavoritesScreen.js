import React from "react";
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import BookCard from "../components/BookCard";

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

export default function FavoritesScreen({ navigation, favorites, onFavorite }) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.content}
        data={favorites}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <BookCard
            book={item}
            navigation={navigation}
            onFavorite={onFavorite}
            isFavorite={true}
          />
        )}
        ListHeaderComponent={<Text style={styles.heading}>My Favorites</Text>}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyIcon}>♡</Text>
            <Text style={styles.empty}>No favorite books yet.</Text>
            <Text style={styles.emptyHint}>Add books to your favorites to see them here.</Text>
          </View>
        }
      />

      <BottomNav navigation={navigation} active="Favorites" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  list: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 90,
  },
  heading: {
    color: "#222222",
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 18,
  },
  emptyBox: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 30,
  },
  emptyIcon: {
    color: "#1976D2",
    fontSize: 52,
    fontWeight: "700",
    backgroundColor: "#EAF3FC",
    width: 90,
    height: 90,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 45,
    marginBottom: 16,
  },
  empty: {
    color: "#222222",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
  emptyHint: {
    color: "#666666",
    textAlign: "center",
    marginTop: 8,
    fontSize: 14,
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
