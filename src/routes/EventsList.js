import AppbarComponent from "../components/AppbarComponent";
import { FlatList, StyleSheet, View } from "react-native";
import EventCard from "../components/EventCard";
import useEvents from "../hooks/useEvent";
const EventList = ({ navigation }) => {
  const { events } = useEvents();

  return (
    <>
      <AppbarComponent title={"Wydarzenia"} navigation={navigation} />
      <View style={styles.eventListContainer}>
        <FlatList
          data={events}
          renderItem={({ item }) => (
            <EventCard item={item} navigation={navigation} />
          )}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  eventListContainer: {
    flex: 1,
  },
});
export default EventList;
