import { Appearance, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Footer from '../component/Footer';
import Main from '../component/Main';

export default function Search() {
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
         <Text style={styles.headingText}> Search </Text>
      </View>
      <View style={styles.main}>
        <Main />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  )
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