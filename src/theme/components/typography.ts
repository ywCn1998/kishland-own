import { Components, Theme } from '@mui/material/styles'

const TypographyComponents: Components<Theme> = {
  MuiTypography: {
    // styleOverrides: {
    //   root: ({ theme }) => ({}),
    // },
  },
  MuiLink: {
    // styleOverrides: {
    //   root: ({ theme }) => ({}),
    // },
  },
  MuiBreadcrumbs: {
    // styleOverrides: {
    //   root: ({ theme }) => ({}),
    //   separator: ({ theme }) => ({}),
    // },
  },
  MuiChip: {
    styleOverrides: {
      // root: ({ ownerState, theme }) => ({
      //   ...(ownerState.size === 'small' && {
      //   })
      // })
    }
  }
}

export default TypographyComponents
