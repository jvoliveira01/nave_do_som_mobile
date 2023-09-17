import {View} from "react-native";
import Typography from "../Typography";
import { styles } from "../../../styles";

interface Props {
    image: React.ReactNode;
    text: string;
}

const ContactInfo = ({image, text}: Props) => {
    return (
        <View style={styles.contactInfoContainer}>
            {image}
            <Typography
                text={text}
                style={{ marginLeft: 24 }}
            /> 
        </View>
    )
}

export default ContactInfo;