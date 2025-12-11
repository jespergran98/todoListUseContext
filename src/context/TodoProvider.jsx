import { useState } from 'react'
import { TodoContext } from './TodoContext'

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete project documentation', done: false },
    { id: 2, text: 'Review pull requests', done: true },
    { id: 3, text: 'Update dependencies', done: false }
  ])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  const removeTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.done))
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo, clearCompleted }}>
      {children}
    </TodoContext.Provider>
  )
}