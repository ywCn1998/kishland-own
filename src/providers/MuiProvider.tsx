'use client'

import { PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createEmotionCache } from '../libs/emotionCache'
import { CacheProvider } from '@emotion/react'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import getTheme from '@/theme'
import { useThemeStore } from '@/store/theme'

export default function MUIProvider({ children }: PropsWithChildren) {
  const { direction } = useThemeStore()
  const theme = getTheme()
  const cache = useMemo(() => createEmotionCache(direction), [direction])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <InitColorSchemeScript attribute="class" />
      <AppRouterCacheProvider options={{ key: 'css', enableCssLayer: true }}>
        <CacheProvider value={cache}>
          <ThemeProvider theme={{ ...theme, direction }}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </CacheProvider>
      </AppRouterCacheProvider>
    </>
  )
}
