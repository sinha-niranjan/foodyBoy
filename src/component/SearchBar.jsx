import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default function SearchBar() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "gray",
          borderRadius: 20,
          margin: 10,
        }}
      >
        <TextInput
          style={{
            width: "85%",
            height: 50,
            borderRadius: 20,
            fontSize: 22,
            padding: 10,
          }}
          placeholder="Search for your items "
        />
        <FontAwesome5Icon name="search" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    paddingHorizontal: 10,
    color: "gray",
  },
});
