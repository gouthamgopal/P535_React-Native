// import React, { useState } from "react";
import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import * as Notifications from "expo-notifications";

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

export default function SignUp({ setshowModal }) {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const firstname = useSelector((state) => state.firstname);
  const username = useSelector((state) => state.username);

  const onSubmit = async () => {
    setshowModal(false);

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    // Second, call the method

    Notifications.scheduleNotificationAsync({
      content: {
        title: "A new user has been registered.",
        body: "Please login!",
      },
      trigger: null,
    });

    dispatch({ type: "ON_SUBMIT" });
  };

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    dispatch({ type: "IMAGE_EDIT", data: pickerResult.uri });
    // console.log(pickerResult.uri);
  };

  let openCameraPickerAsync = async () => {
    let cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.granted === false) {
      alert("permission to access camera is required!");
    }

    let pickerResult = await ImagePicker.launchCameraAsync();
    dispatch({ type: "IMAGE_EDIT", data: pickerResult.uri });
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.modalStyle}>
          <Text style={styles.textHeading}>Sign Up form</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) =>
              dispatch({ type: "FIRSTNAME_EDIT", data: text })
            }
            value={firstname}
            placeholder="Name"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) =>
              dispatch({ type: "EMAIL_EDIT", data: text })
            }
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) =>
              dispatch({ type: "USERNAME_EDIT", data: text })
            }
            value={username}
            placeholder="Username"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) =>
              dispatch({ type: "PASSWORD_EDIT", data: text })
            }
            value={password}
            placeholder="Password"
          />
          <TouchableOpacity
            onPress={openImagePickerAsync}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Pick a photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openCameraPickerAsync}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Take a photo</Text>
          </TouchableOpacity>
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
