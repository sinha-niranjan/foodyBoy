import { Appearance, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Footer from "../component/Footer";
import Categories from "../component/Categories";

export default function Cuisine() {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          {
            backgroundColor: `${theme === "dark" ? "#191a1f" : "#2B964F"}`,
          },
        ]}
      >
        <Text style={styles.headingText}> Cuisine </Text>
      </View>
      <View style={styles.main}>
        <ScrollView>
          <Categories type="a" />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    height: 100,
  },
  headingText: {
    fontSize: 22,
    marginTop: 50,
    marginLeft: 30,
  },

  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: { backgroundColor: "#191a1f", height: 60 },
});
