import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Footer() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <FontAwesome5
          name="home"
          style={styles.icon}
          color={route.name === "Home" ? "#2B964F" : "#ffffff"}
        />
        <Text style={{ color: "#ffffff" }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          navigation.navigate("Cuisine");
        }}
      >
        <FontAwesome5 
          name="globe-asia"
          style={styles.icon}
          color={route.name === "Cuisine" ? "#2B964F" : "#ffffff"}
        />
         
        <Text style={{ color: "#ffffff" }}>Cuisine</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          navigation.navigate("Ingrediants");
        }}
      >
        <FontAwesome5 
          name="list"
          style={styles.icon}
          color={route.name === "Search" ? "#2B964F" : "#ffffff"}
        />
        <Text style={{ color: "#ffffff" }}>Ingrediants</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          navigation.navigate("NonVeg");
        }}
      >
        <FontAwesome5 
          name="egg"
          style={styles.icon}
          color={route.name === "NonVeg" ? "#2B964F" : "#ffffff"}
        />
        <Text style={{ color: "#ffffff" }}>Non-Veg</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          navigation.navigate("Veg");
        }}
      >
        <FontAwesome5 
          name="pizza-slice"
          style={styles.icon}
          color={route.name === "Veg" ? "#2B964F" : "#ffffff"}
        />
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
    fontSize: 25,
  },
});
