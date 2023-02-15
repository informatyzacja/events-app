import { AppRegistry, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { name as appName } from "./app.json";
import EventList from "./src/routes/EventsList";
import theme from "./src/theme";
import styles from "./src/styles";
export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <NavigationContainer>
          <EventList />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
