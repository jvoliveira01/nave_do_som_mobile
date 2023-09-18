import { View } from "react-native";
import { styles } from "../../../styles";
import Typography from "../Typography";

interface Props {
  text: string;
}

const ListItem = ({ text }: Props) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemBullet} />
      <Typography style={styles.paragaphyText} text={text} />
    </View>
  );
};

export default ListItem;
