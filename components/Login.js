// import React, { useState } from "react";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    margin: 10,
    borderColor: "black",
    borderWidth: 2,
    padding: 5,
  },
  textHeading: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    margin: 10,
  },
  closeButton: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    margin: 10,
  },
  modalStyle: {
    borderRadius: 5,
    shadowColor: "#000",
    minWidth: 300,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 2.84,
    elevation: 4,
    padding: 20,
  },
});

export default function SignUp({ setshowModal, setShowDetails }) {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const password = useSelector((state) => state.password);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const onSubmit = () => {
    if (loginUsername == username && loginPassword == password) {
      Alert.alert("Succesful login");
      setshowModal(false);
      setShowDetails(true);
    } else {
      Alert.alert("Login failed");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.modalStyle}>
          <Text style={styles.textHeading}>Sign Up form</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) =>
              setLoginUsername(text)
            }
            value={loginUsername}
            placeholder="Username"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) =>
              setLoginPassword(text)
            }
            value={loginPassword}
            placeholder="Password..."
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onSubmit();
            }}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setshowModal(false);
            }}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
