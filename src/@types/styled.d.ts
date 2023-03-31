import 'styled-components'

declare module 'styled-components' {

  export interface Spacing {
    ty: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
  }

  export interface Border {
    radius: {
      xm: number;
      sm: number;
    }
  }
  export interface ColorsTypeProps {
    main: string;
    onMain: string;
  }
  export interface ColorType {
    primary: ColorsTypeProps;
    secondary: ColorsTypeProps;
    background: ColorsTypeProps;
    error: ColorsTypeProps;
    surface: ColorsTypeProps;
  }

  export type ColorsType =
  | 'primary'
  | 'secondary'
  | 'background'
  | 'error'
  | 'surface';


  export interface TypographyProps {
    fontFamily: string;
    fontSize: number;
  }

  export interface Typography {
    h1: TypographyProps;
    h2: TypographyProps;
    h3: TypographyProps;
    h4: TypographyProps;
    h5: TypographyProps;
    h6: TypographyProps;
    subtitle1: TypographyProps;
    subtitle2: TypographyProps;
    body1: TypographyProps;
    body2: TypographyProps;
    body3: TypographyProps;
    caption: TypographyProps;
    overline: TypographyProps;
  }

  export type TypographyType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption'
    | 'overline';

    export interface DefaultTheme {
      colors: ColorType;
      typography: Typography;
      spacing: Spacing;
      borders: Border;
  }
}
