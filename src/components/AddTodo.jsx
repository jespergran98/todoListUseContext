import React from 'react'
import '../styles/AddTodo.css'

function AddTodo() {
  return (
    <div className="add-todo">
      <input 
        type="text" 
        className="todo-input" 
        placeholder="Add a new todo..."
      />
      <button className="todo-add-button">Add</button>
    </div>
  )
}

export default AddTodo