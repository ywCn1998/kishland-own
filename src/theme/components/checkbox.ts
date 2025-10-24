import { Components, Theme } from "@mui/material/styles";

const CheckboxComponents: Components<Theme> = {
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color : "#E8ECED",
        "&:hover": {
        },
        "&.Mui-checked": {
        },
        "& .MuiSvgIcon-root": {
        },
      },
    },
  },
};

export default CheckboxComponents;
