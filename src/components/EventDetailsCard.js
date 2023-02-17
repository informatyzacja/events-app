import { View } from "react-native";
import theme from "../theme";
import CardRow from "./CardRow";
import SubscribeButton from "./SubscribeButton";
import eventDetailsStyles from "../styles/eventDetailsStyles";
const EventDetailsCard = ({ eventData }) => {
  return (
    <View style={eventDetailsStyles.detailsCardContainer}>
      <View style={eventDetailsStyles.wrapper}>
        <CardRow
          icon={"calendar"}
          text={`${eventData.startDate} - ${eventData.endDate}`}
        />
        <CardRow icon={"map-marker"} text={eventData.place} />
      </View>
      <View style={eventDetailsStyles.buttonContainer}>
        <SubscribeButton icon={"cards-heart-outline"} onPress={() => {}} />
      </View>
    </View>
  );
};

export default EventDetailsCard;
