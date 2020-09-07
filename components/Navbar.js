import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {
    display: "block",
  },
  nav: {
    backgroundColor: "#76ba1b",
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 8,
  },
  title: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <Icon style={styles.icons} name="menu" size={25} />
          <View style={styles.title}>
            <Text>Lab Assignment 2</Text>
          </View>
          <Icon name="search" size={25} />
          <Icon name="person" size={25} />
        </View>
      </View>
    );
  }
}

export default Navbar;
