import AppbarComponent from "../components/AppbarComponent";
import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import EventCard from "../components/EventCard";
import { useEvents } from "../hooks/useEvent";
const EventList = ({ navigation }) => {
  const { data, isLoading, error } = useEvents();
  return (
    <>
      <AppbarComponent title={"Wydarzenia"} navigation={navigation} />

      {isLoading === true ? (
        <View style={styles.loadingElementsContainer}>
          <Text variant="headlineSmall">Wczytuję dane</Text>
        </View>
      ) : isLoading === false && error === null ? (
        <View style={styles.eventListContainer}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <EventCard item={item} navigation={navigation} />
            )}
          />
        </View>
      ) : (
        <View style={styles.loadingElementsContainer}>
          <Text variant="headlineSmall">Wystąpił nieoczekiwany błąd</Text>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  eventListContainer: {
    flex: 1,
  },
  loadingElementsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default EventList;
