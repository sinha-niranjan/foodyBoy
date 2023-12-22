import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Categories from "./Categories";

export default function CuisineCard() {
  return (
    <ScrollView>
      <Categories type={"a"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
