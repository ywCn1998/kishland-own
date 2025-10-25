import { useThemeStore } from "@/store/theme";
import { ThemeOptions } from "@mui/material/styles";

// Media query helper
const mediaQueries = {
  sm: "@media (max-width:767px)",
};

// Font sizes
const fontSizes = {
  h1: { default: "1.8rem", sm: "1.4rem" },
  h4: { default: "1.2rem", sm: "1rem" },
  h5: { default: "1.1rem", sm: "0.875rem" },
};
interface ICustomTheme extends ThemeOptions {
  custom: string;
}

// Light theme
export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#FF8C0B",
      "50": "#E6EDEF",
      100: "#FFF2D3",
      200: "#B1C7CF",
      300: "#066C93",
      400: "#ffa733",
      500: "#FF8C0B",
      600: "#044158",
      700: "#02364A",
      800: "#022431",
      900: "#021D27",
    },
    secondary: {
      50: "#f0f7ff",
      main: "#088DEF",
      500: "#088def",
      // main: '#088DEF'
    },
    error: {
      main: "#FA5050",
      200: "#FA50501A",
    },
    success: {
      main: "#13D397",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F7FA",
    },
    info: {
      main: "#088def",
    },
    text: {
      primary: "#18181B",
      secondary: "#6c779a",
      disabled: "#626E94",
    },
  },
};

// Dark theme
export const darkTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#044963",
    },
    secondary: {
      main: "#044963",
    },
    background: {
      default: "#FFFFFF",
      paper: "",
    },
    text: {
      primary: "#18181B",
      secondary: "#0EA5E9",
    },
  },
};

// Typography (dynamic based on language)
export const typography = (() => {
  const { language } = useThemeStore.getState();
  const fontFamily =
    language === "fa" ? "var(--font-lahzeh)" : "var(--font-lexend)";

  return {
    fontFamily,
    h1: {
      fontSize: "44px",
      fontWeight: 800,
      [mediaQueries.sm]: { fontSize: fontSizes.h1.sm },
    },
    h2: {
      fontSize: "40px",
      fontWeight: 700,
      [mediaQueries.sm]: { fontSize: fontSizes.h5.sm },
    },
    h3: { fontSize: "36px", fontWeight: 700 },
    h4: { fontSize: "32px", fontWeight: 700 },
    h5: {
      fontSize: "30px",
      fontWeight: 500,
      [mediaQueries.sm]: { fontSize: fontSizes.h4.sm },
    },

    body1: { fontSize: "16px", fontWeight: 400 },
    body2: { fontSize: "16px" , fontWeight: 400 },
    button: { fontSize: "14px", fontWeight: 700 },
    caption: { fontSize: "0.75rem", fontWeight: 400 },
    caption2: { fontSize: "14px", fontWeight: 400 },
    overline: { fontSize: "0.75rem", fontWeight: 700 },
    title: { fontSize: "60px", fontWeight: "bold" },
    subtitle1: { fontSize: "18px", fontWeight: 650 },
    subtitle2: { fontSize: 14, fontWeight: 400 },
    sub_title: { fontSize: "26px", fontWeight: 300 },
  };
})();

// Shape and spacing
export const shapeAndSpacing = {
  shape: { borderRadius: 8, borderColor: "#E1E6F0" },
  spacing: 8,
};
