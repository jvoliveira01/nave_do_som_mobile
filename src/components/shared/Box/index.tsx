import { View } from "react-native";
import { styles } from "../../../styles";

interface Props {
  children: React.ReactNode;
}

const Box = ({ children }: Props) => {
  return <View style={styles.box}>{children}</View>;
};

export default Box;
