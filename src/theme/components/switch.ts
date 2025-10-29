import { Components, Theme } from "@mui/material/styles";

const SwitchComponents: Components<Theme> = {
  MuiSwitch: {
    styleOverrides: {
      root: {
        width: 48,
        height: 28,
        padding: 0,
        display: "flex",
      },
      switchBase: {
        padding: 2,
        "&.Mui-checked": {
          transform: "translateX(20px)",
          color: "#fff",
          "& + .MuiSwitch-track": {
            backgroundColor: "primary",
            opacity: 1,
            border: 0,
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
        boxShadow: "none",
      },
      track: {
        borderRadius: 28 / 2,
        backgroundColor: "#E8ECED",
        opacity: 1,
        transition: "background-color 0.3s",
      },
    },
  },
};

export default SwitchComponents;
