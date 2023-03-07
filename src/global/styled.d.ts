// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;

      primary: string;
      gold: string;
      blue: string;
      gray: string;
      grayTextColor: string;

      darkGray: string;
    };
  }
}