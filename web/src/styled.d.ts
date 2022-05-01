import 'styled-components';
import { ThemeType } from './theme';

// Define structure of theme object
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
