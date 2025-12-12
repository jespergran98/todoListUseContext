import { useState, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { TodoContext } from './TodoContext'

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Create base in swamp', done: true },
    { id: 2, text: 'Expand the base with a storage room', done: false },
    { id: 3, text: 'Breed animals for a sustainable food source', done: false },
    { id: 4, text: 'Defeat ender dragon', done: true },
    { id: 5, text: 'Create witch spawner', done: false }
  ])

  const addTodo = useCallback((text) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  }, [])

  const toggleTodo = useCallback((id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }, [])

  const removeTodo = useCallback((id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }, [])

  const clearCompleted = useCallback(() => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.done))
  }, [])

  const value = useMemo(() => ({
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    clearCompleted
  }), [todos, addTodo, toggleTodo, removeTodo, clearCompleted])

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired
}