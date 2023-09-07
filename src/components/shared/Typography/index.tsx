import { Text } from "react-native";
import { styles } from "../../../styles";

interface Props {
  text: string;
  onPress?: (any?: any) => any;
  style?: {};
  type?: "p" | "caption" | "h";
}

const Typography = ({ text, onPress, style, type = "p" }: Props) => {
  const Caption = (
    <Text onPress={onPress} style={[styles.caption, { ...style }]}>
      {text}
    </Text>
  );

  const P = (
    <Text onPress={onPress} style={[styles.p, { ...style }]}>
      {text}
    </Text>
  );

  const H = (
    <Text onPress={onPress} style={[styles.h, { ...style }]}>
      {text}
    </Text>
  );

  switch (type) {
    case "caption": {
      return Caption;
    }
    case "p": {
      return P;
    }
    case "h": {
      return H;
    }
  }
};

export default Typography;
