/* eslint-disable max-len */
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: {
      500: "#0C1925",
      600: "#000000"
    },
    secondary: {
      100: "#ffffff",
      200: "#D2D2D2",
      300: "#F5F5F5",
      400: "#dcdcdc",
      500: "#C8C8C8",
      600: "#797979"

    },
    //submit button
    third: {
      500: "#B51C1A",
      600: "#A61716"
    },
    gray: {
      "900": "#000000",
      "700": "#A1A1A1",
      "500": "#F5F5F5",
      "300": "#D9D9D9",
      "100": "#F5F5F5",
      "10": "#FFFFFF",
    },
    red: {
      "200": "#F9D9D9",
      "600": "#B51C1A",
      "300": "#ff0603",
    },
    blue: {
      "500": "#5388A4"
    },
    background: "#0C1925",
  },

  styles: {
    global: {
      'html, body': {
        bgColor: 'white',
        h: '100vh',
        maxH: '100vh',
        listStylePosition: 'inside',
      },
    },
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
});
