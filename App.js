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
import * as Animatable from "react-native-animatable";
import Navbar from "./components/Navbar";

export default function App() {
  const [count, setCount] = React.useState(0);
  const pan = React.useRef(new Animated.ValueXY()).current;
  let translateXStyle = new Animated.Value(0);
  const panResponder = PanResponder.create({
    onMoveShouldSetResponderCapture: () => true,
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
    onPanResponderRelease: (e, { vx, dx }) => {
      const screenWidth = Dimensions.get("window").width;
      if (vx >= 0.3 || dx >= 0.3 * screenWidth) {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
        setCount(count + 1);
      } else if (vx < -0.3 || dx < -0.3 * screenWidth) {
        Animated.timing(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
        setCount(count - 1);
      }
    },
  });
  return (
    <ScrollView style={styles.container}>
      <Navbar></Navbar>
      {/* <Text>Hello World</Text> */}
      <Animatable.View
        animation="fadeInDownBig"
        duration={2000}
        delay={1000}
        {...panResponder.panHandlers}
        style={[pan.getLayout()]}
      >
        <Card style={styles.card}>
          <CardTitle
            title="Increment or Decrement"
            subtitle="swipe left to decrement and right to increment."
          />
        </Card>
      </Animatable.View>
      <View style={styles.counter}>
        <Text style={styles.countText}>Counter value: {count}</Text>
      </View>
    </ScrollView>
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
