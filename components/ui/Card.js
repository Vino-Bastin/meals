import { StyleSheet, Pressable, View } from "react-native";
import React from "react";

const Card = ({
  children,
  onPress,
  outerContainerStyle,
  innerContainerStyle,
}) => {
  return (
    <View
      style={[styles.fullSpace, styles.outerContainer, outerContainerStyle]}
    >
      <Pressable
        style={styles.fullSpace}
        android_ripple={{
          color: "#ccc",
        }}
        onPress={onPress}
      >
        <View
          style={[styles.fullSpace, styles.innerContainer, innerContainerStyle]}
        >
          {children}
        </View>
      </Pressable>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  fullSpace: {
    flex: 1,
  },
  outerContainer: {
    margin: 15,
    height: 150,
    borderRadius: 8,
    elevation: 5,
    overflow: "hidden",
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
