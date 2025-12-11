import React from 'react'
import '../styles/TodoItem.css'

function TodoItem({ todo }) {
  return (
    <li className="todo-item">
      <input type="checkbox" className="todo-checkbox" />
      <span className="todo-text">{todo.text}</span>
      <button className="todo-delete">Delete</button>
    </li>
  )
}

export default TodoItem