const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "24px",
  },
  // Two sizes: sm and md
  sizes: {
    xs: {
      padding: "4px 8px",
      fontSize: "24px",
    },
    sm: {
      padding: "24px 20px",
      fontSize: "24px",
    },
    md: {
      padding: "30px 55px",
      fontSize: "24px",
    },
  },
  // Two variants: outline and solid
  variants: {
    primary: {
      borderRadius: "92px",
      border: "8px solid black",
      color: "black",
      bg: "orange.100",
      _active: {
        bg: "primary.200",
      },
    },
    secondary: {
      borderRadius: "92px",
      border: "8px solid black",
      color: "black",
      bg: "transparent",
      _hover: {
        color: "orange.200",
      },
      _active: {
        color: "primary.200",
      },
    },
    tertiary: {
      borderRadius: "0",
      bg: "black",
      color: "white",
      boxShadow: "button",
      height: "40px",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};

export default Button;
