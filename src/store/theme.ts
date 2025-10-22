import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeState = {
  mode: 'light' | 'dark'
  direction: 'ltr' | 'rtl'
  language: 'en' | 'fa'
  toggleTheme: () => void
  setDirection: (dir: 'ltr' | 'rtl') => void
  setLanguage: (lang: 'en' | 'fa') => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'light',
      direction: 'rtl',
      language: 'fa',
      toggleTheme: () =>
        set((state) => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
      setDirection: (dir) => set({ direction: dir }),
      setLanguage: (lang) => set({ language: lang })
    }),
    {
      name: 'theme-settings'
    }
  )
)
