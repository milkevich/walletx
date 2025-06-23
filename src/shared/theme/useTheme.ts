import { create } from 'zustand'
import { Appearance } from 'react-native'
import { darkTheme, lightTheme } from './index'

type ThemeState = {
  isDark: boolean
  theme: typeof darkTheme
  toggleTheme: () => void
  setSystemTheme: () => void
}

const systemScheme = Appearance.getColorScheme()

export const useThemeStore = create<ThemeState>((set, get) => ({
  isDark: systemScheme === 'dark',
  theme: systemScheme === 'dark' ? darkTheme : lightTheme,

  toggleTheme: () => {
    const next = !get().isDark
    set({
      isDark: next,
      theme: next ? darkTheme : lightTheme,
    })
  },

  setSystemTheme: () => {
    const current = Appearance.getColorScheme()
    set({
      isDark: current === 'dark',
      theme: current === 'dark' ? darkTheme : lightTheme,
    })
  },
}))
