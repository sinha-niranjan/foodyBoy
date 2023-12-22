import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
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
        <FontAwesome5Icon
          name="home"
          style={styles.icon}
          color={route.name === "Home" ? "#2B964F" : "#ffffff"}
        />
        <Text style={{ color: "#ffffff" }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          navigation.navigate("Dessert");
        }}
      >
        <FontAwesome5Icon
          name="ice-cream"
          style={styles.icon}
          color={route.name === "Dessert" ? "#2B964F" : "#ffffff"}
        />
        <Text style={{ color: "#ffffff" }}>Dessert</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          navigation.navigate("Search");
        }}
      >
        <FontAwesome5Icon
          name="search"
          style={styles.icon}
          color={route.name === "Search" ? "#2B964F" : "#ffffff"}
        />
        <Text style={{ color: "#ffffff" }}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          navigation.navigate("NonVeg");
        }}
      >
        <FontAwesome5Icon
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
        <FontAwesome5Icon
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
