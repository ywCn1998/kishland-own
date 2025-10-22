import { Components, Theme } from "@mui/material/styles";

const ButtonComponents: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      outlined: {
        borderColor: "#E1E6F0",
        color: "#black",
        "&:hover": {
          // borderColor: '#CBD5E1', // optional hover state
          // backgroundColor: 'transparent',
        },
        borderRadius: "15px",
        fontWeight: "400 ",
        boxShadow: "none",
      },
      // root: ({ theme, ownerState }) => ({
      //   ...(ownerState.variant === 'text' && {
      //     color: theme.palette.common.black,
      //     '&:hover': {
      //       color: theme.palette.primary.main,
      //       backgroundColor: 'transparent'
      //     },
      //     transition: 'color 0.3s ease'
      //   })
      // }),
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
