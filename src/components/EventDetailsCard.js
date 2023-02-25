import { StyleSheet, View } from "react-native";
import theme from "../theme";
import CardRow from "./CardRow";
import SubscribeButton from "./SubscribeButton";
import { useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import useSubscribedEvents from "../hooks/useSubscribedEvents";
const EventDetailsCard = ({ eventData }) => {
  const [icon, setIcon] = useState("cards-heart-outline");
  const storageKey = "Subscribed";
  const { subscribedEvents, addEvent, removeEvent } = useSubscribedEvents();
  const handleOnClick = async () => {
    try {
      if (subscribedEvents === null) {
        addEvent(eventData);
        setIcon("cards-heart");
      } else {
        const indexToRemove = subscribedEvents.findIndex(
          (item) => item.id === eventData.id
        );
        if (indexToRemove === -1) {
          addEvent(eventData);
          setIcon("cards-heart");
        } else {
          removeEvent(eventData);
          setIcon("cards-heart-outline");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const checkIfSubscribed = async () => {
    try {
      console.log(subscribedEvents);
      if (subscribedEvents !== null) {
        const index = subscribedEvents.findIndex(
          (item) => item.id === eventData.id
        );
        if (index !== -1) {
          setIcon("cards-heart");
        }
      }
    } catch (error) {
      console.error(error);
    }
    console.log(icon);
  };
  console.log(subscribedEvents);
  useEffect(() => {
    checkIfSubscribed();
  }, []);
  return (
    <View style={styles.detailsCardContainer}>
      <View style={styles.wrapper}>
        <CardRow
          icon={"calendar"}
          text={`${eventData.startDate} - ${eventData.endDate}`}
        />
        <CardRow icon={"map-marker"} text={eventData.place} />
      </View>
      <View style={styles.buttonContainer}>
        <SubscribeButton icon={icon} onPress={handleOnClick} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  detailsCardContainer: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: theme.colors.primaryContainer,
    flex: 1,
    flexDirection: "row",
  },
  wrapper: { flex: 1, flexGrow: 3 },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
  },
});
export default EventDetailsCard;
