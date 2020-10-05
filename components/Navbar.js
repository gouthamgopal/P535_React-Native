import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  nav: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
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
  titleText: {
    fontSize: 18,
  },
});

export class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          {/* <Icon style={styles.icons} name="menu" size={25} /> */}
          <View style={styles.title}>
            <Text style={styles.titleText}>Lab Assignment 6</Text>
          </View>
          {/* <Text onPress={this.props.handleSignUp}>Sign Up</Text> */}
        </View>
      </View>
    );
  }
}

export default Navbar;
