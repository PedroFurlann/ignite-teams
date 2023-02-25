import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components/native";
import defaultTheme from "./src/theme/defaultTheme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={defaultTheme}>
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
