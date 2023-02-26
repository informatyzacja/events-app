import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventList from "./EventsList";
import EventDetails from "./EventDetails";
import SubscribedEventsList from "./SubscribedEventsList";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import theme from "../theme";
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const EventsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="EventsList"
        component={EventList}
      />
      <Stack.Screen
        name="EventDetails"
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: theme.colors.primaryContainer,
          },
        })}
        component={EventDetails}
      />
    </Stack.Navigator>
  );
};
const SubscribedEventsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SubsrcibedEventList"
        component={SubscribedEventsList}
      />
      <Stack.Screen
        name="EventDetails"
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: theme.colors.primaryContainer,
          },
        })}
        component={EventDetails}
      />
    </Stack.Navigator>
  );
};

const Navbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      barStyle={{ backgroundColor: theme.colors.primaryContainer }}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="EventsList"
        component={EventsNavigator}
        options={{
          tabBarLabel: "Wydarzenia",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="calendar" color={color} size={26} />
            );
          },
        }}
      />
      <Tab.Screen
        name="SubsrcibedEventList"
        options={{
          tabBarLabel: "Obserwowane",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="cards-heart"
                color={color}
                size={26}
              />
            );
          },
        }}
        component={SubscribedEventsNavigator}
      />
    </Tab.Navigator>
  );
};
export default Navbar;
