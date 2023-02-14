import AppbarComponent from "../components/AppbarComponent";
import { FlatList, View, Text } from "react-native";
import EventCard from "../components/EventCard";
// import { useState, useEffect } from "react";
const EventList = () => {
  // TODO: Uncomment these when api will be available to use, think about using React Query
  // const [localData, setLocalData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const fetchData = async () => {
  //   try {
  //     const resp = await fetch("../dummy_data.json", {
  //       headers: {
  //         "Content-Type": "application/json",

  //         Accept: "application/json",
  //       },
  //     });
  //     const data = await resp.json();
  //     setLocalData(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const body = isLoading ? (
  //   <Text>Loading</Text>
  // ) : (
  //   <>
  //     <FlatList data={localData} renderItem={EventCard} />
  //   </>
  // );
  const localData = require("../dummy_data.json");
  return (
    <>
      <AppbarComponent />
      <View style={{ backgroundColor: "white" }}>
        <FlatList data={localData} renderItem={EventCard} />
      </View>
    </>
  );
};
export default EventList;
