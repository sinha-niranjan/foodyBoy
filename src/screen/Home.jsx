import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Appearance } from "react-native";
import Main from "../component/Main";

export default function Home() {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(colorScheme);

  const [loading, setLoading] = useState(false);

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
        <Header />
      </View>
      <View style={styles.main}>
        <Main />
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

    justifyContent: "center",
    alignItems: "center",
  },

  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: { backgroundColor: "#191a1f", height: 60 },
});
