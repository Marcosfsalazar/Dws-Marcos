import 'styled-components';
import { ThemeType } from './default';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
