import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ImageCard({ imageUrl, type }) {
  return (
    <View style={styles.imageContainer}>
      <Image
        
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.itemName}> {type} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffff",
    borderRadius: 20,
    padding: 20,
    margin: 10,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 15,
  },
  itemName: { color: "#2B964F", fontSize: 20, fontWeight: "bold" },
});
