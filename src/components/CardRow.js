import { Avatar, Text } from "react-native-paper";
import { View } from "react-native";
import theme from "../theme";
import eventDetailsStyles from "../styles/eventDetailsStyles";
const CardRow = ({ icon, text }) => {
  return (
    <View style={eventDetailsStyles.cardRowContainer}>
      <Avatar.Icon
        color={theme.colors.onSurfaceVariant}
        style={{ backgroundColor: "transparent" }}
        size={28}
        icon={icon}
      />
      <Text variant="bodyLarge">{text}</Text>
    </View>
  );
};
export default CardRow;
