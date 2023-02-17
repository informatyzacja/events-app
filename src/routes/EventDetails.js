import { Text } from "react-native-paper";
import { View, Image, FlatList } from "react-native";
import SubEventCard from "../components/SubEventCard";
import EventDetailsCard from "../components/EventDetailsCard";
import eventDetailsStyles from "../styles/eventDetailsStyles";
const EventDetails = ({ route, navigation }) => {
  const eventData = route.params;
  return (
    <View style={eventDetailsStyles.mainViewContainer}>
      <Image
        source={{ uri: eventData.banerURL }}
        style={eventDetailsStyles.imageContainer}
        resizeMode="cover"
      />
      <Text variant="headlineLarge">{eventData.name}</Text>
      <View style={{ height: 80 }}>
        <EventDetailsCard eventData={eventData} />
      </View>
      <View>
        <Text variant="titleLarge">Opis</Text>
        <Text style={{ margin: 5 }} variant="bodyMedium">
          {eventData.description}
        </Text>
      </View>
      <View style={eventDetailsStyles.imageContainer}>
        <Text variant="titleLarge">Harmonogram</Text>
        <FlatList
          data={eventData.subEvents}
          renderItem={({ item }) => (
            <SubEventCard subEvent={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
};
export default EventDetails;
