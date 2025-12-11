import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import '../styles/TodoItem.css'

function TodoItem({ id }) {
  const { todos, toggleTodo, removeTodo } = useContext(TodoContext)
  
  const todo = todos.find(t => t.id === id)

  if (!todo) return null

  return (
    <li className="todo-item">
      <input 
        type="checkbox" 
        className="todo-checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(id)}
      />
      <span className={`todo-text ${todo.done ? 'todo-text-completed' : ''}`}>
        {todo.text}
      </span>
      <button className="todo-delete" onClick={() => removeTodo(id)}>
        X
      </button>
    </li>
  )
}

export default TodoItem