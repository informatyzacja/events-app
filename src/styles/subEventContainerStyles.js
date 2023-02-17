import { StyleSheet } from "react-native";
import theme from "../theme";
const subEventContainerStyles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: theme.colors.surfaceVariant,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  titleContainer: { flex: 1, alignSelf: "center", paddingLeft: 5 },
  timeContainer: { flex: 1, flexDirection: "column", alignSelf: "flex-end" },
});

export default subEventContainerStyles;
