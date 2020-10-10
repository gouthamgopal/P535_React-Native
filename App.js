import * as React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";
import Modal from "./components/Modal";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-cards";
import { Provider } from "react-redux";
import { store, persistor } from "./store.js";
import { PersistGate } from "redux-persist/integration/react";
import Navbar from "./components/Navbar";


export default function App() {
  

  return (
    <Provider store={store}>
      <ScrollView style={styles.container}>
        <Navbar></Navbar>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  card: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  counter: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  countText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
