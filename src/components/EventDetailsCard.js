import { View } from "react-native";
import theme from "../theme";
import SubEventCardRow from "./SubEventCardRow";
import SubscribeButton from "./SubscribeButton";
const EventDetailsCard = ({ eventData }) => {
  return (
    <View
      style={{
        borderRadius: 10,
        padding: 10,
        backgroundColor: theme.colors.primaryContainer,
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1, flexGrow: 3 }}>
        <SubEventCardRow
          icon={"calendar"}
          text={`${eventData.startDate} - ${eventData.endDate}`}
        />
        <SubEventCardRow icon={"map-marker"} text={eventData.place} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignSelf: "center",
        }}
      >
        <SubscribeButton icon={"cards-heart-outline"} onPress={() => {}} />
      </View>
    </View>
  );
};

export default EventDetailsCard;
