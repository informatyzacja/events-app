import { StyleSheet } from "react-native";
import theme from "../theme";
const eventDetailsStyles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    justifyContent: "space-between",
  },
  imageContainer: {
    height: 200,
    width: null,
  },
  subEventsContainer: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
  },
  detailsCardContainer: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: theme.colors.primaryContainer,
    flex: 1,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
  },
  cardRowContainer: { flex: 1, flexDirection: "row" },
  wrapper: { flex: 1, flexGrow: 3 },
});
export default eventDetailsStyles;
