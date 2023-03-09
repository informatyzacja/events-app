import { subscribedEventsAtom } from '../atoms/subscribedEvents';
import { useAtom } from 'jotai';
import * as Notifications from 'expo-notifications';
// TODO: Add iteration on
const scheduleNotification = async (event) =>
  await Notifications.scheduleNotificationAsync({
    content: {
      title: event.name,
      body: `Masz wydarzenie odbywające się w miejscu: ${event.place}`,
      sound: false,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: 'blue',
    },
    trigger: new Date(event.time), // TODO: change body of dummy_data to see if it works properly
  });

const removeNotification = async (event) => {
  await Notifications.cancelScheduledNotificationAsync(event.notificationId);
};

export const useSubscribedEvents = () => {
  const [subscribedEvents, setSubscribedEvents] = useAtom(subscribedEventsAtom);

  const subscribe = (event) => {
    const notificationId = scheduleNotification(event);
    event.notificationId = notificationId;
    event.subEvents.map((subEvent) => {
      const subEventNotificationId = scheduleNotification(subEvent);
      subEvent.notificationId = subEventNotificationId;
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
