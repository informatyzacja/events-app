import { atomWithStorage, createJSONStorage } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage(() => AsyncStorage);

export const subscribedEventsAtom = atomWithStorage(
  "subscribedEvents",
  [],
  storage
);
