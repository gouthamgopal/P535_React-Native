import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  TextInput,
  Keyboard,
} from "react-native";

class Signup extends Component {
  state = {
    firstname: "",
    email: "",
    password: "",
    phone: "",
  };

  handleFormChange = (key, value) => {
    this.setState({
      key: value,
    });
  };

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          style={styles.modal}
        >
          <View style={styles.modalView}>
            <View style={styles.username}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                value={this.state.firstname}
                onChange={() =>
                  handleFormChange("firstname", event.target.value)
                }
                onBlur={Keyboard.dismiss}
              ></TextInput>
            </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                this.props.handleModalChange();
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 50,
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
});

export default Signup;
