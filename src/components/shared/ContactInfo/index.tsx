import { Pressable } from "react-native";
import Typography from "../Typography";
import { styles } from "../../../styles";

interface Props {
  image: React.ReactNode;
  text: string;
  onPress: () => void;
}

const ContactInfo = ({ image, text, onPress }: Props) => {
  return (
    <Pressable style={styles.contactInfoContainer} onPress={onPress}>
      {image}
      <Typography text={text} style={{ marginLeft: 24 }} />
    </Pressable>
  );
};

export default ContactInfo;
