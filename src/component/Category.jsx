import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageCard from "./ImageCard";

export default function Category() {
  return (
    <View
      style={{
        flex: 1,
        height: 300,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 20,
        margin: 10,
        backgroundColor:'#2B964F'
      }}
    >
      <Text
        style={{ fontSize: 20, margin: 5, marginLeft: 20, fontWeight: "bold",color:"#fff" }}
      >
        Category
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
