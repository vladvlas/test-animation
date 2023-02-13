import { StyleSheet, View } from 'react-native';
import AnimatedLottieView from "lottie-react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <AnimatedLottieView duration={2000} source={require("./assets/133564-typing.json")} autoPlay={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
