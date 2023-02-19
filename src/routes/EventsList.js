import AppbarComponent from "../components/AppbarComponent";
import { FlatList, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EventCard from "../components/EventCard";
import { useState, useEffect } from "react";
const EventList = ({ navigation }) => {
  // TODO: think about using React Query
  const [localData, setLocalData] = useState([]);
  const fetchData = async () => {
    const cacheExpiryTime = new Date();
    cacheExpiryTime.setDate(cacheExpiryTime.getDate() + 1);
    try {
      const lastFetched = JSON.parse(
        await AsyncStorage.getItem("expirationDate")
      );
      if (lastFetched === null || lastFetched["date"] < cacheExpiryTime) {
        console.log("Retrieve data from API");
        const data = require("../dummy_data.json");
        AsyncStorage.setItem("fetchedEvents", JSON.stringify(data));
        AsyncStorage.setItem(
          "expirationDate",
          JSON.stringify({ date: new Date() })
        );
        setLocalData(data);
      } else {
        console.log("Read data from storage");
        const data = await AsyncStorage.getItem("fetchedEvents");
        setLocalData(JSON.parse(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AppbarComponent title={"Wydarzenia"} navigation={navigation} />
      <View style={styles.eventListContainer}>
        <FlatList
          data={localData}
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
