import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import BooksScreen from "../screens/BooksScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import BookDetailScreen from "../screens/BookDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";

const Stack = createNativeStackNavigator();

const headerOptions = {
  headerStyle: { backgroundColor: "#1976D2" },
  headerTintColor: "#FFFFFF",
  headerTitleStyle: { fontWeight: "700" },
  headerShadowVisible: false,
};

export default function AppNavigator({ favorites, onFavorite }) {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Home" options={{ title: "Book Library" }}>
        {(props) => (
          <HomeScreen {...props} favorites={favorites} onFavorite={onFavorite} />
        )}
      </Stack.Screen>

      <Stack.Screen name="Books" options={{ title: "Books" }}>
        {(props) => (
          <BooksScreen {...props} favorites={favorites} onFavorite={onFavorite} />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: "Categories" }}
      />

      <Stack.Screen name="BookDetail" options={{ title: "Book Details" }}>
        {(props) => (
          <BookDetailScreen {...props} favorites={favorites} onFavorite={onFavorite} />
        )}
      </Stack.Screen>

      <Stack.Screen name="Favorites" options={{ title: "Favorites" }}>
        {(props) => (
          <FavoritesScreen {...props} favorites={favorites} onFavorite={onFavorite} />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "About Us" }}
      />

      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: "Contact Us" }}
      />
    </Stack.Navigator>
  );
}
