import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SignUp from "./Signup";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";

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

function Navbar() {
  const [showModal, setshowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const firstname = useSelector((state) => state.firstname);
  const username = useSelector((state) => state.username);
  const image = useSelector((state) => state.image);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            setShowLoginModal(true);
          }}
          style={styles.button}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.titleText}>Lab Assignment 7</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setshowModal(true);
          }}
          style={styles.button}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        overFullScreen
      >
        <SignUp setshowModal={setshowModal} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={false}
        visible={showLoginModal}
        overFullScreen
      >
        <Login
          setshowModal={setShowLoginModal}
          setShowDetails={setShowDetails}
        />
      </Modal>
      {showDetails && (
        <View>
          <Text style={styles.currentUser}>
            {"\nFirst name: " +
              firstname +
              "\nUsername: " +
              username +
              "\nEmail: " +
              email +
              "\nPassword: " +
              password +
              "\n Image: "}
          </Text>
          <Image
            style={{ width: 150, height: 150 }}
            source={{
              uri: image,
            }}
          />
        </View>
      )}
    </ScrollView>
  );
}

export default Navbar;
