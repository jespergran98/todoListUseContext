import { useContext, useEffect } from 'react'
import { ThemeContext } from './context/ThemeContext'
import TodoList from './components/TodoList'
import './styles/App.css'

function App() {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="app">
      <TodoList />
    </div>
  )
}

export default App