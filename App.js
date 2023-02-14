import { AppRegistry, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { name as appName } from "./app.json";
import EventList from "./src/routes/EventsList";
export default function Main() {
  return (
    <PaperProvider theme={{ version: 3 }}>
      <SafeAreaView>
        <NavigationContainer>
          <EventList />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
