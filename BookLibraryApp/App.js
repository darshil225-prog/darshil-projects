import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (book) => {
    const alreadyFavorite = favorites.some((item) => item.id === book.id);

    if (alreadyFavorite) {
      setFavorites(favorites.filter((item) => item.id !== book.id));
    } else {
      setFavorites([...favorites, book]);
    }
  };

  return (
    <NavigationContainer>
      <AppNavigator favorites={favorites} onFavorite={toggleFavorite} />
    </NavigationContainer>
  );
}
