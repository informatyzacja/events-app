import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useEvents = () => {
  // TODO: think about using React Query
  const [localData, setLocalData] = useState([]);
  const fetchAPI = async () => {
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
    fetchAPI();
  }, []);
  return { events: localData };
};
export default useEvents;
