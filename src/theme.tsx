import { extendTheme } from "@chakra-ui/react";

export const todsTheme = extendTheme({
  colors: {
    tods: {
      50: "#f9f3e6",
      100: "#e1dacf",
      200: "#c9c1b4",
      300: "#b3a999",
      400: "#9c907d",
      500: "#827663",
      600: "#655c4c",
      700: "#494235",
      800: "#2d271d",
      900: "#130d00",
    },
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
            bg: " #F5F5DC",
          },
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
