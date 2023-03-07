import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { SecularOne_400Regular } from "@expo-google-fonts/secular-one";
import { ThemeProvider } from "styled-components/native";
import { CodeContextProvider } from "./src/context/CodeProvider";
import { colorTheme } from "./src/global/colorTheme";
import { Home } from "./src/pages/home/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    SecularOne_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={colorTheme}>
      <CodeContextProvider>
        <Home />
      </CodeContextProvider>
    </ThemeProvider>
  );
}
