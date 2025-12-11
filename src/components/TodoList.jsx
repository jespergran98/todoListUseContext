import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './todoItem'
import AddTodo from './AddTodo'
import ThemeSwitcher from './ThemeSwitcher'
import '../styles/TodoList.css'

function TodoList() {
  const { todos } = useContext(TodoContext)
  
  const activeTodos = todos.filter(todo => !todo.done).length

  return (
    <div className="todo-list-container">
      <header className="todo-header">
        <h1>My Todo List</h1>
        <ThemeSwitcher />
      </header>
      
      <AddTodo />
      
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id} id={todo.id} />
        ))}
      </ul>
      
      <footer className="todo-footer">
        <span className="todo-count">{activeTodos} items left</span>
        <button className="todo-clear">Clear completed</button>
      </footer>
    </div>
  )
}

export default TodoList