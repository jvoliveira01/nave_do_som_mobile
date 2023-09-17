import { StyleSheet, Dimensions } from "react-native";
import { appTheme } from "./theme";
import Constants from "expo-constants";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  box: {
    backgroundColor: appTheme.colors.secondary[200],
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
    height: width / 1.6,
    margin: 5,
    borderRadius: 5,
  },

  caption: {
    color: appTheme.colors.secondary[50],
    fontFamily: appTheme.fonts.Light,
    fontSize: appTheme.fontSizes.caption,
  },

  p: {
    color: appTheme.colors.secondary[50],
    fontFamily: appTheme.fonts.Normal,
    fontSize: appTheme.fontSizes.p,
  },

  h: {
    color: appTheme.colors.secondary[50],
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
    backgroundColor: appTheme.colors.secondary[900],
    position: "absolute",
    bottom: 0,
  },

  navBarButtons: { alignItems: "center", justifyContent: "center" },

  homeMainView: {
    position: "absolute",
    width,
    height: width / 1.7,
    zIndex: 1,
    justifyContent: "space-around",
  },

  homeTitleText: {
    fontSize: 25,
    textAlign: "center",
    color: appTheme.colors.secondary[50],
  },

  homeCategoriesText: { width: 100, height: 100 },

  homeMainContent: {
    width,
    alignItems: "center",
    paddingHorizontal: 15,
  },

  homeMainContentTitles: {
    fontSize: 25,
    textAlign: "center",
    width: "100%",
    maxWidth: "95%",
  },

  homeHighlightPhrase: {
    fontSize: 25,
    textAlign: "center",
    color: appTheme.colors.primary[50],
  },

  homeWhatsAppButton: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 15,
    marginBottom: 75,
    position: "absolute",
    bottom: 5,
  },

  homeLightBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    position: "absolute",
    backgroundColor: appTheme.colors.bgTranslucent,
  },

  lightBoxCloseButton: {
    width,
    alignItems: "flex-end",
    paddingRight: 10,
  },

  aboutUsMainContainer: {
    width,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16  
  },

  aboutUsMainContainerText: {
    textAlign: "justify",
    paddingBottom: 12
  },

  aboutUsMissionContainer: {
    borderBottomWidth: 1,
    borderColor: "white"
  },

  aboutUsListContainer: {
    paddingTop: 2  
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  listItemBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },

  listItemText: {
    color: 'white',
    textAlign: 'left',
    marginLeft: 12  
  },

  contactMainContainer: {
    width,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16  
  },

  contactContent: {
    width: '100%',
    paddingTop: 24
  },

  contactInfoContainer: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 24
  }
});
