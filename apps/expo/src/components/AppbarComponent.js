import { Appbar, useTheme } from "react-native-paper";

const AppbarComponent = ({ title, navigation }) => {
  const { colors } = useTheme();
  return (
    <Appbar.Header
      mode="center-aligned"
      style={{ backgroundColor: colors.primaryContainer }}
    >
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
export default AppbarComponent;
