import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Category from "./Category";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      setCategories(data?.meals);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();

  return (
    <View style={{ flex: 1 }}>
      <Category title={"Categories"} url={"/categories.php"} />

      {categories?.map((cat, i) => {
        return (
          <Category key={i} title={cat?.strCategory} url={cat?.strCategory} />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
