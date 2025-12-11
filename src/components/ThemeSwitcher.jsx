import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/ThemeSwitcher.css'

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="theme-switcher">
      <span className="theme-text">Excisting Theme: {theme}</span>
      <button className="theme-toggle" onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  )
}

export default ThemeSwitcher