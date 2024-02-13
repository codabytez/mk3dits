/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import Button from "./components/button";
import colors from "./foundations/colors";
import shadows from "./foundations/shadows";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-space-grotesk)",
    body: "var(--font-space-grotesk)",
    mono: "var(--font-space-grotesk)",
  },
  colors,
  shadows,
  components: {
    Button,
  },
});
