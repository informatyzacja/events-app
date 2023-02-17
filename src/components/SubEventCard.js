import { View } from "react-native";
import { Text } from "react-native-paper";
import CardRow from "./CardRow";
import theme from "../theme";
import subEventContainerStyles from "../styles/subEventContainerStyles";
const SubEventCard = ({ subEvent, navigation }) => {
  const startDateSplitted = subEvent.startDate.split(" ");
  return (
    <View style={subEventContainerStyles.cardContainer}>
      <View style={subEventContainerStyles.titleContainer}>
        <Text variant="titleMedium">{subEvent.name}</Text>
      </View>
      <View style={subEventContainerStyles.timeContainer}>
        <CardRow icon={"calendar"} text={startDateSplitted[0]} />
        <CardRow icon={"clock"} text={startDateSplitted[1]} />
      </View>
    </View>
  );
};
export default SubEventCard;
