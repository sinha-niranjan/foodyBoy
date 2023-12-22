import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "./SearchBar";
import Banner from "./Banner";
import Categories from "./Categories";

export default function Main() {

  
  return (
    <View style={styles.container}>
      <View style={{ height: 80 }}>
        <SearchBar />
      </View>
      <ScrollView>
        <View style={{ flex: 1, height: 200 }}>
          <Banner />
        </View>
        <View>
          <Categories type={"c"} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
});
