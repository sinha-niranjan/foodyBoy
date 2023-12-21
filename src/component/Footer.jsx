import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default function Footer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          console.log("hello");
        }}
      >
        <FontAwesome5Icon name="home" style={styles.icon} />
        <Text style={{ color: "#ffffff" }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          console.log("hello");
        }}
      >
        <FontAwesome5Icon name="ice-cream" style={styles.icon} />
        <Text style={{ color: "#ffffff" }}>Dessert</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          console.log("hello");
        }}
      >
        <FontAwesome5Icon name="search" style={styles.icon} />
        <Text style={{ color: "#ffffff" }}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          console.log("hello");
        }}
      >
        <FontAwesome5Icon name="egg" style={styles.icon} />
        <Text style={{ color: "#ffffff" }}>Non-Veg</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          console.log("hello");
        }}
      >
        <FontAwesome5Icon name="pizza-slice" style={styles.icon} />
        <Text style={{ color: "#ffffff" }}>Veg</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon: {
    color: "#ffffff",
    fontSize: 25,
  },
});
