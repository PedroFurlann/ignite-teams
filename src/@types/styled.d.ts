import 'styled-components/native';
import defaultTheme from 'src/theme/defaultTheme';

declare module 'styled-components/native' {
  type ThemeType = typeof defaultTheme;

  export interface DefaultTheme extends ThemeType {}
}