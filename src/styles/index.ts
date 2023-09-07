import { StyleSheet, Dimensions } from "react-native";
import { appTheme } from "./theme";
import Constants from "expo-constants";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  box: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },

  headerLogo: {
    width: width * 0.75,
  },

  banners: {
    width,
    height: width / 1.5,
    marginTop: 0,
    borderRadius: 5,
  },

  carousel: {
    width: width - 30,
    height: width / 1.9,
    margin: 5,
    borderRadius: 5,
  },

  caption: {
    fontFamily: appTheme.fonts.Light,
    fontSize: appTheme.fontSizes.caption,
  },

  p: {
    fontFamily: appTheme.fonts.Normal,
    fontSize: appTheme.fontSizes.p,
  },

  h: {
    fontFamily: appTheme.fonts.SemiBold,
    fontSize: appTheme.fontSizes.h,
  },

  headerBox: {
    width,
    backgroundColor: appTheme.colors.secondary[900],
    height: 65,
    justifyContent: "center",
    alignItems: "center",
  },

  navBarBox: {
    width,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: appTheme.colors.secondary[50],
    position: "absolute",
    bottom: 0,
  },

  navBarButtons: { alignItems: "center", justifyContent: "center" },
});
