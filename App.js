import * as React from "react";
import { View, StyleSheet } from "react-native";
import Modal from "./components/Modal";

import { Provider } from "react-redux";
import { store, persistor } from "./store.js";
import { PersistGate } from "redux-persist/integration/react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Modal />
        </View>
      </PersistGate>
    </Provider>
  );
}
