/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import Button from "./components/button";
import colors from "./foundations/colors";
import shadows from "./foundations/shadows";
import breakpoints from "./foundations/breakpoints";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-space-grotesk)",
    body: "var(--font-space-grotesk)",
    mono: "var(--font-space-grotesk)",
  },
  colors,
  shadows,
  breakpoints,
  components: {
    Button,
  },
});
