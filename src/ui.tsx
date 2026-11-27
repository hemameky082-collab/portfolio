import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { en, ar, type Content, type Lang } from './data'

export type Theme = 'dark' | 'light'

interface UIState {
  lang: Lang
  theme: Theme
  t: Content
  toggleLang: () => void
  toggleTheme: () => void
}

const Ctx = createContext<UIState | null>(null)

const params = new URLSearchParams(window.location.search)

export function UIProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() =>
    params.get('lang') === 'ar' || params.get('lang') === 'en'
      ? (params.get('lang') as Lang)
      : localStorage.getItem('lang') === 'ar'
        ? 'ar'
        : 'en',
  )
  const [theme, setTheme] = useState<Theme>(() =>
    params.get('theme') === 'light' || params.get('theme') === 'dark'
      ? (params.get('theme') as Theme)
      : localStorage.getItem('theme') === 'light'
        ? 'light'
        : 'dark',
  )

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    try {
      localStorage.setItem('lang', lang)
    } catch { /* ignore */ }
  }, [lang])

  useEffect(() => {
    const h = document.documentElement
    h.classList.toggle('light', theme === 'light')
    h.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch { /* ignore */ }
  }, [theme])

  const value: UIState = {
    lang,
    theme,
    t: lang === 'ar' ? ar : en,
    toggleLang: () => setLang((l) => (l === 'en' ? 'ar' : 'en')),
    toggleTheme: () => setTheme((th) => (th === 'dark' ? 'light' : 'dark')),
  }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useUI(): UIState {
  const v = useContext(Ctx)
  if (!v) throw new Error('useUI must be used inside UIProvider')
  return v
}
