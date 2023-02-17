import { View } from "react-native";
import { Text } from "react-native-paper";
import SubEventCardRow from "./SubEventCardRow";
import theme from "../theme";

const SubEventCard = ({ subEvent, navigation }) => {
  const startDateSplitted = subEvent.startDate.split(" ");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.surfaceVariant,
        margin: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
      }}
    >
      <View style={{ flex: 1, alignSelf: "center", paddingLeft: 5 }}>
        <Text variant="titleMedium">{subEvent.name}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "column", alignSelf: "flex-end" }}>
        <SubEventCardRow icon={"calendar"} text={startDateSplitted[0]} />
        <SubEventCardRow icon={"clock"} text={startDateSplitted[1]} />
      </View>
    </View>
  );
};
export default SubEventCard;
