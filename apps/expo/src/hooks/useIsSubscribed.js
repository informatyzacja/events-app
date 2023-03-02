import React from "react";
import { useSubscribedEvents } from "./useSubscribedEvents";

export const useIsSubscribed = (event) => {
  const { subscribedEvents } = useSubscribedEvents();

  const isSubscribed = subscribedEvents.some((item) => item.id === event.id);

  return isSubscribed;
};
