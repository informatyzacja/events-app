import AppbarComponent from "../components/AppbarComponent";
import { View, StyleSheet, FlatList } from "react-native";
import EventCard from "../components/EventCard";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SubscribedEventsList = ({ navigation }) => {
  const [localData, setLocalData] = useState([]);
  const fetchData = async () => {
    try {
      console.log("Retrieve data from storage");
      const data = JSON.parse(await AsyncStorage.getItem("Subscribed"));
      if (data) {
        setLocalData(data);
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
      <AppbarComponent title={"Zapisane wydarzenia"} navigation={navigation} />
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
export default SubscribedEventsList;
