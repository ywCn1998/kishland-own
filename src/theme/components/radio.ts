import { Components, Theme } from "@mui/material/styles";

const RadioComponents: Components<Theme> = {
  MuiRadio: {
    styleOverrides: {
      root: {
        color: "#E8ECED", 
        "&:hover": {
          backgroundColor: "transparent", 
        },
        "&.Mui-checked": {
          color: "#FB7201", 
        },
        "& .MuiSvgIcon-root": {
          fontSize: "1.5rem", 
        },
      },
    },
  },
};

export default RadioComponents;
