import { extendTheme } from "@chakra-ui/react";

export const todsTheme = extendTheme({
  colors: {
    tods: 
        
{
  50: '#ffe8ed',
  100: '#f3bfc9',
  200: '#e895a5',
  300: '#df6c82',
  400: '#d6445e',
  500: '#bd2b44',
  600: '#932135',
  700: '#691726',
  800: '#400c16',
  900: '#190206',
}
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        submit: {
          bg: " #FFFDD0",
          boxShadow: "0 0 2px 2px #efdfde",
          _hover: {
            bg: " tods.200",
          },
          h:"2.5rem"
        },

        // 5. We can add responsive variants
        sm: {
          bg: "teal.500",
          fontSize: "md",
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: "lg", // default is md
        variant: "sm", // default is solid
        colorScheme: "green", // default is gray
      },
    },
  },
});

export default todsTheme;
