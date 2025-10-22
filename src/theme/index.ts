import { createTheme } from '@mui/material/styles'
import components from './components'
import {
  lightTheme,
  darkTheme,
  typography,
  shapeAndSpacing
} from './primitives'
import { useThemeStore } from '@/store/theme'

const getTheme = () => {
  const { mode, direction } = useThemeStore.getState()
  const selectedTheme = mode === 'light' ? lightTheme : darkTheme

  return createTheme({
    direction,
    ...selectedTheme,
    typography,
    ...shapeAndSpacing,
    components,
  })
}

export default getTheme
