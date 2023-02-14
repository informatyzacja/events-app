import { Appbar, Button, IconButton } from "react-native-paper";

const AppbarComponent = () => {
  return (
    <Appbar.Header
      style={{
        backgroundColor: 0x7fcbea,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Appbar.Action icon="menu" onPress={() => {}} />

      <Appbar.Content
        title="Wydarzenia"
        titleStyle={{ color: "white" }}
        style={{ alignItems: "center", color: "white" }}
      />
      <Appbar.Action icon="cog" onPress={() => {}} />
    </Appbar.Header>
  );
};
export default AppbarComponent;
