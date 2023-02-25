import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const useSubscribedEvents = () => {
  const key = "Subscribed";
  const [localData, setLocalData] = useState([]);

  const subscribe = async (event) => {
    setLocalData([...localData, event]);
    await AsyncStorage.setItem(key, JSON.stringify(localData));
  };

  const unSubscribe = async (event) => {
    const updatedData = localData.filter((item) => item.id !== event.id);
    setLocalData(updatedData);
    await AsyncStorage.setItem(key, JSON.stringify(updatedData));
  };

  const fetchStorage = async () => {
    try {
      console.log("Retrieve data from storage");
      const data = JSON.parse(await AsyncStorage.getItem(key));
      console.log(` Po retrieve z fetchStorage ${data}`);
      if (data) {
        setLocalData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStorage();
  }, []);

  return {
    subscribedEvents: localData,
    addEvent: subscribe,
    removeEvent: unSubscribe,
  };
};

export default useSubscribedEvents;
