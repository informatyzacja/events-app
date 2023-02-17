import { AppRegistry, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { name as appName } from "./app.json";
import EventList from "./src/routes/EventsList";
import theme from "./src/theme";
import EventDetails from "./src/routes/EventDetails";
import { StyleSheet } from "react-native";
export default function Main() {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="EventsList">
            <Stack.Screen
              options={{ headerShown: false }}
              name="EventsList"
              component={EventList}
            />
            <Stack.Screen
              name="EventDetails"
              options={({ route }) => ({
                title: route.params.name,
                headerStyle: {
                  backgroundColor: theme.colors.primaryContainer,
                },
              })}
              component={EventDetails}
            />
          </Stack.Navigator>
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
