import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ImageCard from "./ImageCard";
import axios from "axios";

export default function Category({ title, url }) {
  const [dishes, setDishes] = useState([]);

  const fetchData = async () => {
    try {
      if (url === "/categories.php") {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/categories.php`
        );
        setDishes(data?.categories);
      } else {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${url}`
        );
        setDishes(data?.meals);
      }
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {dishes?.map((dish, i) => {
          return (
            <ImageCard
              key={i}
              imageUrl={
                url === "/categories.php"
                  ? dish?.strCategoryThumb
                  : dish?.strMealThumb
              }
              type={
                url === "/categories.php" ? dish?.strCategory : dish?.strMeal
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    margin: 10,
    backgroundColor: "#2B964F",
  },
  title: {
    fontSize: 20,
    margin: 5,
    marginLeft: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
