import { StatusBar } from 'expo-status-bar';
import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components/native';
import defaultTheme from './src/theme/defaultTheme';


export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar />

      <Groups />
    </ThemeProvider>
  )
};
