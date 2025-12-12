import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/ThemeSwitcher.css'

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="theme-switcher">
      <span className="theme-text">Existing Theme: {theme}</span>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        Change Theme
      </button>
    </div>
  )
}

export default ThemeSwitcher