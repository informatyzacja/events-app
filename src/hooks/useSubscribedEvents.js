import { subscribedEventsAtom } from "../atoms/subscribedEvents";
import { useAtom } from "jotai";

export const useSubscribedEvents = () => {
  const [subscribedEvents, setSubscribedEvents] = useAtom(subscribedEventsAtom);

  const subscribe = (event) => {
    const newSubscribedEvents = [...subscribedEvents, event];
    setSubscribedEvents(newSubscribedEvents);
  };

  const unSubscribe = (event) => {
    const newSubscribedEvents = subscribedEvents.filter(
      (item) => item.id !== event.id
    );
    setSubscribedEvents(newSubscribedEvents);
  };

  return {
    subscribedEvents: subscribedEvents,
    addEvent: subscribe,
    removeEvent: unSubscribe,
  };
};
