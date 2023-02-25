import { useQuery } from "react-query";

export const useEvents = () => {
  const fetchAPI = async () => {
    try {
      const data = require("../dummy_data.json");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const { data, isLoading, error } = useQuery("events", fetchAPI);
  return { data, isLoading, error };
};
