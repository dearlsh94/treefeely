import { useEffect, useState } from 'react'

import { CONFIG_THEME_KEY, Themes } from '@/constants'
import { useLocalStorage } from './useLocalStorage'

const useTheme = () => {
  const [theme, setTheme] = useState<Themes>(Themes.LIGHT)
  const { setConfig, getConfig } = useLocalStorage()

  useEffect(() => {
    const configTheme = getConfig(CONFIG_THEME_KEY)
    switch (configTheme) {
      case Themes.DARK:
        changeAndSaveTheme(Themes.DARK)
        break
      case Themes.LIGHT:
        changeAndSaveTheme(Themes.LIGHT)
        break
      default:
        changeThemeBasedOnSystemPreference()
        break
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? Themes.DARK : Themes.LIGHT
      changeAndSaveTheme(newTheme)
    }
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const changeThemeBasedOnSystemPreference = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    if (mediaQuery.matches) {
      changeAndSaveTheme(Themes.DARK)
    } else {
      changeAndSaveTheme(Themes.LIGHT)
    }
  }

  const changeAndSaveTheme = (theme: Themes) => {
    document.documentElement.setAttribute(CONFIG_THEME_KEY, theme)
    setTheme(theme)
    setConfig(CONFIG_THEME_KEY, theme)
  }

  return { theme, changeAndSaveTheme }
}

export default useTheme
