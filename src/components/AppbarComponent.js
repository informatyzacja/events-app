import { Appbar, Button, IconButton } from "react-native-paper";

const AppbarComponent = () => {
  return (
    <Appbar.Header mode="center-aligned" style={{ backgroundColor: "#7FCBEA" }}>
      <Appbar.Action icon="menu" onPress={() => {}} />

      <Appbar.Content title="Wydarzenia" titleStyle={{ color: "white" }} />
      <Appbar.Action icon="cog" onPress={() => {}} />
    </Appbar.Header>
  );
};
export default AppbarComponent;
