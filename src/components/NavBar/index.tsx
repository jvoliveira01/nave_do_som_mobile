import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";
import Typography from "../shared/Typography";
import { styles } from "../../styles";
import { appTheme } from "../../styles/theme";

interface MenuNavBar {
  name: string;
  iconName: "home" | "personal-video" | "contact-page";
  onPress: () => any;
  routeName: string;
}

const NavBar = () => {
  const route = useRouter();
  const routeName = usePathname();

  const menuNavBar: MenuNavBar[] = [
    {
      name: "Início",
      iconName: "home",
      onPress: () => route.push("/"),
      routeName: "/",
    },
    {
      name: "Quem Somos",
      iconName: "personal-video",
      onPress: () => route.push("/about"),
      routeName: "/about",
    },
    {
      name: "Contato",
      iconName: "contact-page",
      onPress: () => route.push("/contact"),
      routeName: "/contact",
    },
  ];
  return (
    <View style={styles.navBarBox}>
      {menuNavBar.map((item) => (
        <TouchableOpacity
          key={item.iconName}
          onPress={item.onPress}
          style={styles.navBarButtons}
        >
          <MaterialIcons
            name={item.iconName}
            size={25}
            color={
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
