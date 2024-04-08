import { extendTheme } from "@chakra-ui/react";

export const todsTheme = extendTheme({
  colors: {
    tods: 
        {
          50: '#ffe3ff',
          100: '#ffb3f9',
          200: '#fb83f2',
          300: '#f952ec',
          400: '#f622e5',
          500: '#dd09cc',
          600: '#ad03a0',
          700: '#7c0072',
          800: '#4c0046',
          900: '#1d001b',
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
