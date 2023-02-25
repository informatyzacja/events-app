import { AppRegistry, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { name as appName } from "./app.json";
import theme from "./src/theme";
import { StyleSheet } from "react-native";
import Navbar from "./src/routes/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import AsyncStorage from "@react-native-async-storage/async-storage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});
const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});
export default function Main() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={asyncStoragePersister}
    >
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={theme}>
          <SafeAreaView style={styles.safeAreaContainer}>
            <NavigationContainer>
              <Navbar />
            </NavigationContainer>
          </SafeAreaView>
        </PaperProvider>
      </QueryClientProvider>
    </PersistQueryClientProvider>
  );
}
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
});
AppRegistry.registerComponent(appName, () => Main);
