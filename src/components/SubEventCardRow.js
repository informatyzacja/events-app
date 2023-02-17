import { Avatar, Text } from "react-native-paper";
import { View } from "react-native";
import theme from "../theme";

const SubEventCardRow = ({ icon, text }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
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
export default SubEventCardRow;
