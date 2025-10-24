import { Components, Theme } from "@mui/material/styles";

const SelectComponents: Components<Theme> = {
  MuiSelect: {
    styleOverrides: {
      root: {
      },
      icon: {
        color: "#0f62fe",
        fontSize: "1.25rem",
      },
      select: {
        paddingTop: "10px",
        paddingBottom: "10px",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
 maxHeight: 300,      },
    },
  },
};

export default SelectComponents;
