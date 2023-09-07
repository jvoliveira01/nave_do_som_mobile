import { View } from "react-native";
import { styles } from "../../styles";
import Image from "../shared/Image";
import { useRouter } from "expo-router";

const Header = () => {
  const router = useRouter();
  return (
    <View style={styles.headerBox}>
      <Image
        src={require("../../../assets/logo.png")}
        alt="Nave Do Som"
        onPress={() => router}
        style={styles.headerLogo}
      />
    </View>
  );
};

export default Header;
