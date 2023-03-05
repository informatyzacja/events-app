import { useQuery } from "@tanstack/react-query";

export const useEvents = () => {
  const fetchAPI = async () => {
    const data = require("../dummy_data.json");
    return data;
  };
  return useQuery({ queryKey: ["events"], queryFn: fetchAPI });
};
