import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "base",
  },

  sizes: {
    big: {
      fontSize: "sm",
      px: 5,
      py: 4,
    },
    medium: {
      fontSize: "md",
      px: 7,
      py: 6,
    },
  },

  variants: {
    // Ja feito
    grey1: {
      bg: "grey.0",
      color: "grey.white",
      _hover: {
        bg: "grey.1",
      },
    },
    // A fazer
    negative: {
      bg: "grey.6",
      color: "grey.2",
      _hover: {
        bg: "grey.5",
      },
    },
    disable: {
      bg: "grey.5",
      color: "grey.white",
    },
    brand1: {
      bg: "brand.1",
      color: "grey.white",
      _hover: {
        bg: "brand.2",
      },
    },
    brandOpacity: {
      bg: "purple.500",
      color: "white",
    },
    light: {
      bg: "purple.500",
      color: "white",
    },
    outilineLight: {
      bg: "purple.500",
      color: "white",
    },
    outiline1: {
      bg: "purple.500",
      color: "white",
    },
    outiline2: {
      bg: "purple.500",
      color: "white",
    },
    outilineBrand1: {
      bg: "purple.500",
      color: "white",
    },
    link: {
      bg: "purple.500",
      color: "white",
    },
    alert: {
      bg: "purple.500",
      color: "white",
    },
    sucess: {
      bg: "purple.500",
      color: "white",
    },
    brandDisable: {
      bg: "purple.500",
      color: "white",
    },
  },

  defaultProps: {
    size: "medium",
    variant: "brand1",
  },
});
