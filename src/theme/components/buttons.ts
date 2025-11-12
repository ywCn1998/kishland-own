import { Components, Theme } from "@mui/material/styles";

const ButtonComponents: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      outlined: ({ ownerState, theme }) => ({
        borderColor: "#E1E6F0",
        color: "black",
        borderRadius: "15px",
        fontWeight: 400,
        boxShadow: "none",
        ...(ownerState.color === "error" && {
          borderColor: theme.palette.error.main,
          color: theme.palette.error.main,
          "&:hover": {
          borderColor: theme.palette.error.main,
            backgroundColor: "#FDECEC",
          },
        }),
        ...(ownerState.color === "info" && {
          borderColor: theme.palette.info.main,
          color: theme.palette.info.main,
          "&:hover": {
            borderColor: theme.palette.info.dark,
            backgroundColor: "#E7F3FF",
          },
        }),
      }),

      sizeMedium: ({ theme }) => ({
        padding: theme.spacing(2, 3),
        borderRadius: 18,
        fontSize: 16,
        fontWeight: 400,
      }),
      contained: ({ theme }) => ({
        boxShadow: "none",
        fontWeight: 400,
        fontSize: "20px",
        padding: theme.spacing(1.5, 3),

        [theme.breakpoints.down("sm")]: {
          fontSize: "20px",
          padding: theme.spacing(2, 3),
        },


        "&:hover": {},
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.size === "small" && {
          "& svg": {
            width: 18,
            height: 18,
          },
        }),
        ...(ownerState.size === "large" && {
          "& svg": {
            width: 30,
            height: 30,
          },
        }),
      }),
    },
  },
};

export default ButtonComponents;
