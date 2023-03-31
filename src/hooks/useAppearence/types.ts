import { ColorSchemeName } from "react-native";
import { DefaultTheme } from "styled-components";

export type themeType = 'light'| 'dark'

export interface Props {
  theme: DefaultTheme;
  currentTheme: themeType;
}

export interface colorSchemeProps {
  colorScheme: ColorSchemeName;
}
