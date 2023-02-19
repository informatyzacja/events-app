import { StyleSheet, View } from "react-native";
import theme from "../theme";
import CardRow from "./CardRow";
import SubscribeButton from "./SubscribeButton";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const EventDetailsCard = ({ eventData }) => {
  const [icon, setIcon] = useState("cards-heart-outline");
  const storageKey = "Subscribed";

  const handleOnClick = async () => {
    try {
      const subscribedItems = JSON.parse(
        await AsyncStorage.getItem(storageKey)
      );
      if (subscribedItems === null) {
        AsyncStorage.setItem("Subscribed", JSON.stringify([eventData]));
        setIcon("cards-heart");
      } else {
        const indexToRemove = subscribedItems.findIndex(
          (item) => item.id === eventData.id
        );
        if (indexToRemove === -1) {
          subscribedItems.push(eventData);
          setIcon("cards-heart");
        } else {
          subscribedItems.splice(indexToRemove, 1);
          setIcon("cards-heart-outline");
        }
        AsyncStorage.setItem(storageKey, JSON.stringify(subscribedItems));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const checkIfSubscribed = async () => {
    try {
      const subscribedItems = JSON.parse(
        await AsyncStorage.getItem(storageKey)
      );
      console.log(subscribedItems);
      if (subscribedItems !== null) {
        const index = subscribedItems.findIndex(
          (item) => item.id === eventData.id
        );
        if (index !== -1) {
          setIcon("cards-heart");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

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
