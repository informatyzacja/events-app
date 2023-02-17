import { TouchableHighlight } from "react-native";
import { Avatar } from "react-native-paper";
import theme from "../theme";
const SubscribeButton = ({ icon, onPress }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor={theme.colors.primaryContainer}
      onPress={onPress}
    >
      <Avatar.Icon
        icon={icon}
        backgroundColor={"transparent"}
        color={theme.colors.onSurface}
        alignSelf={"center"}
      />
    </TouchableHighlight>
  );
};
export default SubscribeButton;
