import { View, TouchableOpacity, ImageSourcePropType } from "react-native";
import { useRouter, usePathname } from "expo-router";
import Typography from "../shared/Typography";
import { styles } from "../../styles";
import { appTheme } from "../../styles/theme";
import Image from "../shared/Image";

interface MenuNavBar {
  name: string;
  iconSrc: ImageSourcePropType;
  onPress: () => any;
  routeName: string;
}

const NavBar = () => {
  const route = useRouter();
  const routeName = usePathname();

  const menuNavBar: MenuNavBar[] = [
    {
      name: "Início",
      iconSrc: require("../../../assets/images/icons/home.png"),
      onPress: () => route.push("/"),
      routeName: "/",
    },
    {
      name: "Quem Somos",
      iconSrc: require("../../../assets/images/icons/aboutUs.png"),
      onPress: () => route.push("/about"),
      routeName: "/about",
    },
    {
      name: "Contato",
      iconSrc: require("../../../assets/images/icons/contact.png"),
      onPress: () => route.push("/contact"),
      routeName: "/contact",
    },
  ];
  return (
    <View style={styles.navBarBox}>
      {menuNavBar.map((item) => (
        <TouchableOpacity
          key={item.routeName}
          onPress={item.onPress}
          style={styles.navBarButtons}
        >
          <Image
            src={item.iconSrc}
            alt={item.name}
            style={{ width: 20, height: 20, marginBottom: 3 }}
            onPress={item.onPress}
            tintColor={
              routeName === item.routeName
                ? appTheme.colors.primary[50]
                : appTheme.colors.secondary[100]
            }
          />
          <Typography
            text={item.name}
            type="caption"
            style={{
              fontFamily: appTheme.fonts.SemiBold,
              color:
                routeName === item.routeName
                  ? appTheme.colors.primary[50]
                  : appTheme.colors.secondary[100],
            }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavBar;
