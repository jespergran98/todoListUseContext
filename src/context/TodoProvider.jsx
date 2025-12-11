import { useState } from 'react'
import { TodoContext } from './TodoContext'

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Create base in swamp', done: true },
    { id: 2, text: 'Expand the base with a storage room', done: false },
    { id: 3, text: 'Breed animals for a sustainable food source', done: false },
    { id: 4, text: 'defeat ender dragon', done: true },
    { id: 5, text: 'create witch spawner', done: false }
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