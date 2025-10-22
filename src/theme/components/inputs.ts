import { Components, Theme } from "@mui/material/styles";

const InputComponents: Components<Theme> = {
  MuiTextField: {
    styleOverrides: {
      // root: ({ theme }) => ({
      // })
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {},
      shrink: {},
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      // root: ({ theme }) => ({
      // })
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      // root: ({ theme }) => ({}),
    },
  },
  MuiRadio: {
    styleOverrides: {
      // root: ({ theme }) => ({}),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: "16px",
        padding : 8,
        
      },
    },
  },
};

export default InputComponents;
