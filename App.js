import { AppRegistry, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { name as appName } from "./app.json";
import theme from "./src/theme";
import { StyleSheet } from "react-native";
import Navbar from "./src/routes/Navbar";

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <NavigationContainer>
          <Navbar />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
});
AppRegistry.registerComponent(appName, () => Main);
