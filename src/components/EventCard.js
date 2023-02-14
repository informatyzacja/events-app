import { Card, Text, TouchableRipple } from "react-native-paper";
const EventCard = ({ item }) => {
  //TODO: Switch in later version from fake api call to AsyncStorage Call
  return (
    <TouchableRipple
      onPress={() => console.log("Pressed")}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <Card mode="elevated" style={{ margin: 10, backgroundColor: "white" }}>
        <Card.Cover source={{ uri: item.banerURL }} />
        <Card.Title
          title={item.name}
          subtitle={item.startDate}
          variant="headlineMedium"
        />
        <Card.Content style={{ display: "flex", flexDirection: "row" }}>
          <Text>{item.description} </Text>
        </Card.Content>
      </Card>
    </TouchableRipple>
  );
};
export default EventCard;
