import { Components, Theme } from '@mui/material/styles'

const SurfaceComponents: Components<Theme> = {
  MuiCard: {
    // styleOverrides: {
    //   root: ({ theme }) => ({
    //   })
    // }
  },
  MuiDrawer: {
    // styleOverrides: {
    //   root: {
    //   }
    // }
  },
  MuiPaper: {
    // styleOverrides: {
    //   root: ({ theme }) => ({
    //   }),
    // },
  },
  MuiList: {
    // styleOverrides: {
    //   root: () => ({
    //   })
    // }
  },
  MuiAlert: {
    styleOverrides: {
      // root: ({ theme, ownerState }) => ({
      //   ...(ownerState.severity === 'warning' && {
      //   }),
      // }),
      // icon: ({ theme, ownerState }) => ({
      //   ...(ownerState.severity === 'warning' && {
      //   }),
      // }),
      // message: ({ theme }) => ({
      // })
    }
  }
}

export default SurfaceComponents
