import { subscribedEventsAtom } from '../atoms/subscribedEvents';
import * as Notifications from 'expo-notifications';
import { useAtom } from 'jotai';

// TODO: Add iteration on
const scheduleNotification = async (event) => {
  const id = await Notifications.scheduleNotificationAsync({
    content: {
      title: event.name,
      body: `Masz wydarzenie odbywające się w miejscu: ${event.place}`,
      sound: false,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: 'blue',
    },
    trigger: {
      seconds: 10,
    }, //new Date(event.time), // TODO: Need to investigate further why after passing date in format YYYY-MM-DDTHH:MM:SS:mSmSZ it doesnt pop up notifications
  });
  console.log(`Here it is in good format ${id}`);
  return id;
};

const removeNotification = async (event) => {
  await Notifications.cancelScheduledNotificationAsync(event.notificationId);
};

export const useSubscribedEvents = () => {
  const [subscribedEvents, setSubscribedEvents] = useAtom(subscribedEventsAtom);

  const subscribe = (event) => {
    const id = scheduleNotification(event);
    console.log(`Here should it remain in the same format ${id}`);
    event.subEvents.map((subEvent) => {
      scheduleNotification(subEvent);
    });
    const newSubscribedEvents = [...subscribedEvents, event];
    setSubscribedEvents(newSubscribedEvents);
  };

  const unSubscribe = (event) => {
    const newSubscribedEvents = subscribedEvents.filter((item) => {
      if (item.id === event.id) {
        removeNotification(event);
        event.subEvents.map((subEvent) => {
          removeNotification(subEvent);
        });
      }
      return item.id !== event.id;
    });
    setSubscribedEvents(newSubscribedEvents);
  };

  return {
    subscribedEvents: subscribedEvents,
    addEvent: subscribe,
    removeEvent: unSubscribe,
  };
};
