import { Card, Text, TouchableRipple } from "react-native-paper";
// import theme from "../theme";
import styles from "../styles";
const EventCard = ({ item }) => {
  //TODO: Switch in later version from fake api call to AsyncStorage Call
  return (
    <TouchableRipple
      onPress={() => console.log("Pressed")}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <Card mode="elevated" style={styles.eventCard}>
        <Card.Cover source={{ uri: item.banerURL }} />
        <Card.Title
          title={item.name}
          titleVariant="headlineSmall"
          subtitle={item.startDate}
          subtitleVariant="titleSmall"
        />
        <Card.Content>
          <Text>{item.description} </Text>
        </Card.Content>
      </Card>
    </TouchableRipple>
  );
};
export default EventCard;
