import theme from '../theme';

declare module 'styled-components' {
  // styled.d.ts
  export interface DefaultTheme {
    colors: typeof theme.colors;
    fonts: typeof theme.fonts;
  }
}
