import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import store from "./store";

import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableHighlight,
  Keyboard,
  Alert,
  TouchableOpacity,
} from "react-native";

import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Form from "./components/Form";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleModalChange = () => {
    setModalVisible(!modalVisible);
  };

  const onSubmit = () => {
    console.log("Sign up data. \n");
    console.log(
      "First Name: " +
        firstname +
        "\n" +
        "Last Name: " +
        lastname +
        "\n" +
        "Password: " +
        password +
        "\n" +
        "Email: " +
        email +
        "\n"
    );
    setFirstName("");
    setLastName("");
    setPassword("");
    setEmail("");

    let payload = {
      firstname: firstname,
      lastname: lastname,
      password: password,
      email: email,
    };

    if (firstname != "" && lastname != "" && password != "" && email != "") {
      store.dispatch({
        type: "REGISTER_SUCCESS",
        payload: payload,
      });
    } else {
      store.dispatch({
        type: "REGISTER_FAIL",

      });
    }

    store.subscribe(() => console.log(store.getState()));

    handleModalChange();
  };

  return (
    <View style={styles.container}>
      <NavBar handleSignUp={() => handleModalChange()} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={styles.modal}
      >
        <View style={styles.modalView}>
          <Text style={styles.header}>Sign Up</Text>
          <View style={styles.tab}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              value={firstname}
              onChangeText={(text) => setFirstName(text)}
              placeholder=" First Name"
              style={styles.inputTag}
            ></TextInput>
          </View>
          <View style={styles.tab}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              value={lastname}
              onChangeText={(text) => setLastName(text)}
              placeholder=" Last Name"
              style={styles.inputTag}
            ></TextInput>
          </View>
          <View style={styles.tab}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder=" Email"
              style={styles.inputTag}
            ></TextInput>
          </View>
          <View style={styles.tab}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder=" Password"
              style={styles.inputTag}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={{ ...styles.openButton }}
            onPress={() => {
              onSubmit();
              Alert.alert("Check the console for logs.");
            }}
          >
            <Text style={styles.textStyle}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.openButton, backgroundColor: "red" }}
            onPress={() => {
              handleModalChange();
            }}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Form />
    </View>
  );
}

store.subscribe(() => console.log(store.getState()));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tab: {
    marginBottom: 20,
  },
  inputTag: {
    marginTop: 10,
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
  label: {
    fontWeight: "800",
  },
  openButton: {
    alignItems: "center",
    backgroundColor: "#007BFF",
    padding: 10,
    width: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  textStyle: {
    alignSelf: "center",
    textAlignVertical: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
