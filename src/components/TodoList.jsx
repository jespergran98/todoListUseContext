import React from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import '../styles/TodoList.css'

function TodoList() {
  const mockTodos = [
    { id: 1, text: 'Complete project documentation', completed: false },
    { id: 2, text: 'Review pull requests', completed: true },
    { id: 3, text: 'Update dependencies', completed: false }
  ]

  return (
    <div className="todo-list-container">
      <header className="todo-header">
        <h1>My Todo List</h1>
        <button className="theme-toggle">Toggle Theme</button>
      </header>
      
      <AddTodo />
      
      <ul className="todo-list">
        {mockTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      
      <footer className="todo-footer">
        <span className="todo-count">3 items left</span>
        <button className="todo-clear">Clear completed</button>
      </footer>
    </div>
  )
}

export default TodoList