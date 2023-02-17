import { Card, Text, TouchableRipple } from "react-native-paper";
import styles from "../styles";
const EventCard = ({ item, navigation }) => {
  //TODO: Switch in later version from fake api call to AsyncStorage Call
  // const navigation = useNavigation();
  return (
    <TouchableRipple
      onPress={() => navigation.navigate("EventDetails", item)}
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
