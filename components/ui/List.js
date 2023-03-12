import React from "react";
import { StyleSheet, View } from "react-native";

import Subtitle from "./Subtitle";

const List = ({ data }) => {
  return (
    <View>
      {data.map((item, index) => (
        <View key={index} style={styles.container}>
          <Subtitle style={styles.text}>{index + 1}.</Subtitle>
          <Subtitle style={styles.text}>{item}</Subtitle>
        </View>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    color: "white",
  },
});
