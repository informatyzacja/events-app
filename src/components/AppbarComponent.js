import { Appbar, useTheme } from "react-native-paper";

const AppbarComponent = ({ title, navigation }) => {
  const { colors } = useTheme();
  return (
    <Appbar.Header
      mode="center-aligned"
      style={{ backgroundColor: colors.primaryContainer }}
    >
      <Appbar.Action icon="menu" onPress={() => {}} />
      <Appbar.Content title={title} />
      <Appbar.Action icon="cog" onPress={() => {}} />
    </Appbar.Header>
  );
};
export default AppbarComponent;
