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

  bannersTextTitle: {
    position: "absolute",
    width,
    height: width / 1.5,
    zIndex: 1,
    justifyContent: "space-around",
  },

  bannerImage: { width, height: width / 1.5, opacity: 0.65 },

  titlesText: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
    color: appTheme.colors.secondary[50],
  },

  paragaphyText: {
    textAlign: "justify",
    paddingBottom: 12,
    paddingHorizontal: 10,
  },

  scrollView: {
    marginBottom: 60,
  },

  homeCategoriesView: {
    backgroundColor: appTheme.colors.primary[500],
    borderRadius: 50,
    padding: 20,
    marginVertical: 15,
  },

  homeCategoriesIcons: {
    width: 75,
    height: 75,
  },

  mainContent: {
    width,
    alignItems: "center",
    paddingHorizontal: 15,
  },

  video: {
    width: width - 25,
    height: 210,
    borderRadius: 10,
  },

  posterVideo: {
    resizeMode: "contain",
    width: width - 25,
    height: 210,
    borderRadius: 10,
  },

  videoPauseView: {
    width: "100%",
    height: 30,
    position: "absolute",
    alignItems: "flex-end",
  },

  videoPauseImage: { width: 25, height: 25, top: 10 },

  homeHighlightPhrase: {
    fontSize: 25,
    textAlign: "center",
    color: appTheme.colors.primary[50],
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: appTheme.colors.primary[50],
    paddingVertical: 10,
    marginVertical: 25,
  },

  homeWhatsAppView: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 15,
    marginBottom: 75,
    position: "absolute",
    bottom: 5,
  },

  homeWhatsAppImage: { width: 45, height: 45 },

  homeLightBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    position: "absolute",
    backgroundColor: appTheme.colors.bgTranslucent,
  },

  lightBoxCloseButtonView: {
    width,
    alignItems: "flex-end",
    paddingRight: 10,
  },

  lightBoxImage: { width, height: 250 },

  aboutUsImage: {
    width: width - 25,
    height: width / 0.9,
    borderRadius: 10,
    marginVertical: 12,
  },

  aboutUsFrame: {
    borderWidth: 1,
    borderColor: "white",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },

  aboutUsMissionContainer: {
    borderBottomWidth: 1,
    borderColor: "white",
  },

  aboutUsListContainer: {
    paddingTop: 2,
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  listItemBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "white",
    marginBottom: 12,
  },

  contactMainContainer: {
    width,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
  },

  contactContent: {
    width: "100%",
    paddingTop: 24,
  },

  contactInfoContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 24,
  },
});
