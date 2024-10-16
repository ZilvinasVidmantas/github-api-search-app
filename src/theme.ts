import { createTheme } from "@mui/material";

export const theme  = createTheme({
  palette: {
    secondary: {
      main: '#5a6373'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 760,
      lg: 1000,
      xl: 1300,
    }
  }
});