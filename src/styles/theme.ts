import { RFValue } from "react-native-responsive-fontsize";

const appTheme = {
  colors: {
    primary: {
      50: "#ffc30e",
      500: "#a56913",
    },
    secondary: {
      50: "#fff",
      100: "#787878",
      200: "#1f1f1f",
      900: "#000",
    },
    bgTranslucent: "#000000b9",
  },
  fontSizes: {
    caption: RFValue(11),
    p: RFValue(16),
    h: RFValue(20),
  },
  fonts: {
    Light: "Rubik_300Light",
    Normal: "Rubik_400Regular",
    SemiBold: "Rubik_500Medium",
    Bold: "Rubik_600SemiBold",
  },
};

export { appTheme };
