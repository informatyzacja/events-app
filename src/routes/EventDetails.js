import { Text } from "react-native-paper";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import SubEventCard from "../components/SubEventCard";
import EventDetailsCard from "../components/EventDetailsCard";
const EventDetails = ({ route, navigation }) => {
  const eventData = route.params;
  return (
    <ScrollView>
      <View style={styles.mainViewContainer}>
        <Image
          source={{ uri: eventData.banerURL }}
          style={styles.imageContainer}
          resizeMode="cover"
        />
        <Text variant="headlineLarge">{eventData.name}</Text>
        <View style={styles.detailsContainer}>
          <EventDetailsCard eventData={eventData} />
        </View>
        <View>
          <Text variant="titleLarge">Opis</Text>
          <Text style={styles.description} variant="bodyMedium">
            {eventData.description}
          </Text>
        </View>
        <Text variant="titleLarge">Harmonogram</Text>
        {eventData.subEvents.map((subEvent) => {
          return <SubEventCard subEvent={subEvent} navigation={navigation} />;
        })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    justifyContent: "space-between",
  },
  imageContainer: {
    height: 200,
    width: null,
  },
  description: {
    margin: 5,
  },
  detailsContainer: { height: 80 },
});
export default EventDetails;
