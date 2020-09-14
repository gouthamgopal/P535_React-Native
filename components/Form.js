import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  TextInput,
  Keyboard,
  Picker,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import DatePicker from "react-native-datepicker";

class Form extends Component {
  state = {
    username: "",
    gender: "Male",
    country: "",
    date: "2020-09-13",
    bio: "",
  };

  submitForm = () => {
    console.log("User Form Data. \n");
    console.log(this.state);
    this.setState({
      username: "",
      gender: "Male",
      country: "",
      date: "2020-09-13",
      bio: "",
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>User Details Form</Text>
        <View style={styles.formField}>
          <View>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.inputTag}
              onChangeText={(text) => this.setState({ username: text })}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.label}>Gender</Text>
            <Picker
              selectedValue={this.state.gender}
              style={styles.inputTag}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ gender: itemValue })
              }
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
          <View>
            <Text style={styles.label}>DOB</Text>
            <DatePicker
              style={styles.dateTag}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              onDateChange={(date) => {
                this.setState({ date: date });
              }}
            />
          </View>
          <View>
            <Text style={styles.label}>Country</Text>
            <TextInput
              style={styles.inputTag}
              value={this.state.country}
              onChangeText={(text) => this.setState({ country: text })}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.label}>Bio</Text>
            <TextInput
              style={styles.bioText}
              multiline
              numberOfLines={4}
              onChangeText={(text) => this.setState({ bio: text })}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={{ ...styles.openButton }}
            onPress={() => {
              this.submitForm();
              Alert.alert("Check console for data");
            }}
          >
            <Text style={styles.textStyle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Form;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  formField: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  dateTag: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 10,
  },
  inputTag: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  bioText: {
    width: 200,
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
  openButton: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#007BFF",
    borderRadius: 10,
    padding: 10,
    width: 200,
    marginBottom: 20,
  },
  textStyle: {
    alignSelf: "center",
    textAlignVertical: "center",
  },
});
