import AppbarComponent from "../components/AppbarComponent";
import { Button, Text, Avatar } from "react-native-paper";
import { View, Image, FlatList } from "react-native";
import styles from "../styles";
import SubEventCard from "../components/SubEventCard";
import EventDetailsCard from "../components/EventDetailsCard";
const EventDetails = ({ route, navigation }) => {
  const eventData = route.params;
  const image = require("../../assets/example.png");
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        marginTop: 10,
        justifyContent: "space-between",
      }}
    >
      <Image
        source={{ uri: eventData.banerURL }}
        style={{ height: 200, width: null }}
        resizeMode="cover"
      />
      <Text variant="headlineLarge">{eventData.name}</Text>
      <View style={{ height: 80 }}>
        <EventDetailsCard eventData={eventData} />
      </View>
      {/* <Image source={{ uri: "https://picsum.photos/100/100" }} alt="Image" /> */}
      {/* <View
        style={{
          height: 80,
          margin: 10,
        }}
      ></View> */}
      <View>
        <Text variant="titleLarge">Opis</Text>
        <Text style={{ margin: 5 }} variant="bodyMedium">
          {" "}
          {eventData.description}{" "}
        </Text>
      </View>
      <View
        style={{ flex: 1, flexDirection: "column", alignContent: "center" }}
      >
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
