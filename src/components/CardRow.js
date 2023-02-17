import { Avatar, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
const CardRow = ({ icon, text }) => {
  return (
    <View style={styles.cardRowContainer}>
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
const styles = StyleSheet.create({
  cardRowContainer: { flex: 1, flexDirection: "row" },
});
export default CardRow;
