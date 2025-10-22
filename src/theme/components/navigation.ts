import { Components, Theme } from '@mui/material/styles'

const NavigationComponents: Components<Theme> = {
  MuiAppBar: {
    styleOverrides: {
      // root: ({ theme }) => ({}),
    }
  },
  MuiTabs: {
    styleOverrides: {
      // root: ({ theme }) => ({}),
    }
  },
  MuiDrawer: {
    styleOverrides: {
      // root: ({ theme }) => ({
      // }),
    }
  }
}

export default NavigationComponents
