import { subscribedEventsAtom } from '../atoms/subscribedEvents';
import * as Notifications from 'expo-notifications';
import { useAtom } from 'jotai';

// TODO: Add iteration on
const scheduleNotification = async (event) => {
  const trigger = new Date(event.startDate);
  trigger.setMinutes(trigger.getMinutes() - 15);
  const id = await Notifications.scheduleNotificationAsync({
    content: {
      title: event.name,
      body: `Masz wydarzenie odbywające się w miejscu: ${event.place}`,
      sound: false,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: 'blue',
    },
    trigger,
  });
  return id;
};

const removeNotification = async (event) => {
  await Notifications.cancelScheduledNotificationAsync(event.notificationId);
};

export const useSubscribedEvents = () => {
  const [subscribedEvents, setSubscribedEvents] = useAtom(subscribedEventsAtom);

  const subscribe = (event) => {
    scheduleNotification(event).then((result) => {
      event.notificationId = result;
    });
    event.subEvents.map((subEvent) => {
      scheduleNotification(subEvent).then((result) => {
        subEvent.notificationId = result;
      });
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
