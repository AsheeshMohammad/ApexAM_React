import { ThemeOptions, createTheme } from "@mui/material/styles";
interface CustomThemeOptions extends ThemeOptions {
  callColors?: {
    selectedTheme?: string;
    themeButtonColor?: string;
  };
}
declare module '@mui/material/styles' {
    interface BreakpointOverrides {
      xs: false; // removes the `xs` breakpoint
      sm: false;
      md: false;
      lg: false;
      xl: false;
      mobile: true; // adds the `mobile` breakpoint
      tablet: true;
      laptop: true;
      desktop: true;
    }
  }
const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
    typography: {
      fontFamily: 'Roboto-Reg'
    }
  })as CustomThemeOptions;

export default theme;
