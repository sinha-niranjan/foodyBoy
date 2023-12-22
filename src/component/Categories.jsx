import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import axios from "axios";

export default function Categories({ type }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/list.php?${type}=list`
      );

      setCategories(data?.meals);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  };

  return loading ? (<Text>Loading .....</Text>) :  (
    <View style={{ flex: 1 }}>
      <Category title={"Categories"} url={"/categories.php"} />

      {categories?.map((cat, i) => {
        return (
          <Category
            key={i}
            title={
              type === "c"
                ? cat?.strCategory
                : type === "i"
                ? cat?.strIngredient
                : cat?.strArea
            }
            url={
              type === "c"
                ? cat?.strCategory
                : type === "i"
                ? cat?.strIngredient
                : cat?.strArea
            }
            type={type}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
