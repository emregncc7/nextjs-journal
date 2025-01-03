'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = {
  background: string
  text: string
  primary: string
  secondary: string
  accent: string
  muted: string
  border: string
  card: string
}

type ThemeMode = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  mode: ThemeMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light')

  useEffect(() => {
    // Check local storage and system preference
    const savedMode = localStorage.getItem('theme') as ThemeMode
    if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
      setMode(savedMode)
      document.documentElement.classList.add(savedMode)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    // Update class and local storage when mode changes
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(mode)
    localStorage.setItem('theme', mode)
  }, [mode])

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const theme = {
    background: mode === 'light' ? '#ffffff' : '#0f172a',
    text: mode === 'light' ? '#334155' : '#e2e8f0',
    primary: mode === 'light' ? '#3b82f6' : '#60a5fa',
    secondary: mode === 'light' ? '#64748b' : '#94a3b8',
    accent: mode === 'light' ? '#2563eb' : '#3b82f6',
    muted: mode === 'light' ? '#f8fafc' : '#1e293b',
    border: mode === 'light' ? '#e2e8f0' : '#334155',
    card: mode === 'light' ? '#ffffff' : '#1e293b',
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 