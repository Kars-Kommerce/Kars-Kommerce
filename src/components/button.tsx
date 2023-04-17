import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "600",
    borderRadius: "4px",
    fontFamily: "Inter",
  },

  sizes: {
    big: {
      fontSize: "md",
      px: 7,
      py: 4,
    },
    medium: {
      fontSize: "sm",
      px: 5,
      py: 3,
    },
  },

  variants: {
    grey1: {
      bg: "grey.0",
      color: "grey.white",
      _hover: {
        bg: "grey.1",
      },
    },
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
      bg: "brand.4",
      color: "brand.1",
    },
    light: {
      bg: "grey.10",
      color: "grey.1",
    },
    outilineLight: {
      border: "2px solid",
      borderColor: "grey.10",
      bg: "transparent",
      color: "grey.10",
      _hover: {
        bg: "grey.white",
        color: "grey.1",
      },
    },
    outiline1: {
      border: "2px solid",
      borderColor: "grey.0",
      bg: "transparent",
      color: "grey.0",
      _hover: {
        bg: "grey.1",
        color: "grey.white",
      },
    },
    outiline2: {
      border: "2px solid",
      borderColor: "grey.4",
      bg: "transparent",
      color: "grey.0",
      _hover: {
        bg: "grey.1",
        color: "grey.white",
        borderColor: "grey.1",
      },
    },
    outilineBrand1: {
      border: "2px solid",
      borderColor: "brand.1",
      bg: "transparent",
      color: "brand.1",
      _hover: {
        bg: "brand.4",
        borderColor: "brand.1",
      },
    },
    linkButton: {
      bg: "transparent",
      color: "grey.0",
      _hover: {
        bg: "grey.8",
      },
    },
    alert: {
      bg: "alert.3",
      color: "alert.1",
      _hover: {
        bg: "alert.2",
      },
    },
    sucess: {
      bg: "sucess.3",
      color: "sucess.1",
      _hover: {
        bg: "sucess.2",
      },
    },
    brandDisable: {
      bg: "brand.3",
      color: "brand.4",
    },
  },

  defaultProps: {
    size: "medium",
    variant: "brand1",
  },
});
