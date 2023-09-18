import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { appTheme } from "../styles/theme";

const App = () => {
  const [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        backgroundColor={appTheme.colors.primary[500]}
        style="inverted"
      />
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="about" />
        <Stack.Screen name="contact" />
      </Stack>
    </>
  );
};

export default App;
