import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/ThemeSwitcher.css'

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="theme-switcher">
      <span className="theme-text">Gjeldende tema: {theme}</span>
      <button className="theme-toggle" onClick={toggleTheme}>
        Bytt tema
      </button>
    </div>
  )
}

export default ThemeSwitcher