import { useContext, useState, useMemo } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import ThemeSwitcher from './ThemeSwitcher'
import '../styles/TodoList.css'

function TodoList() {
  const { todos, clearCompleted } = useContext(TodoContext)
  const [title, setTitle] = useState('Minecraft Todo List')
  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const [tempTitle, setTempTitle] = useState(title)
  
  const { activeTodos, completedTodos } = useMemo(() => ({
    activeTodos: todos.filter(todo => !todo.done).length,
    completedTodos: todos.filter(todo => todo.done).length
  }), [todos])

  const handleTitleEdit = () => {
    setTempTitle(title)
    setIsEditingTitle(true)
  }

  const handleTitleSave = () => {
    if (tempTitle.trim()) {
      setTitle(tempTitle.trim())
    } else {
      setTempTitle(title)
    }
    setIsEditingTitle(false)
  }

  const handleTitleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleTitleSave()
    } else if (e.key === 'Escape') {
      setTempTitle(title)
      setIsEditingTitle(false)
    }
  }

  return (
    <div className="todo-list-container">
      <header className="todo-header">
        <div className="title-section">
          {isEditingTitle ? (
            <input
              type="text"
              className="title-input"
              value={tempTitle}
              onChange={(e) => setTempTitle(e.target.value)}
              onBlur={handleTitleSave}
              onKeyDown={handleTitleKeyDown}
              autoFocus
              maxLength={50}
              aria-label="Edit list title"
            />
          ) : (
            <>
              <h1>{title}</h1>
              <button 
                className="edit-title-btn" 
                onClick={handleTitleEdit}
                aria-label="Edit list title"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </button>
            </>
          )}
        </div>
        <ThemeSwitcher />
      </header>
      
      <AddTodo />
      
      <ul className="todo-list" role="list">
        {todos.length === 0 ? (
          <li className="todo-empty" role="status">No todos yet. Add one above!</li>
        ) : (
          todos.map(todo => (
            <TodoItem key={todo.id} id={todo.id} />
          ))
        )}
      </ul>
      
      <footer className="todo-footer">
        <span className="todo-count" role="status" aria-live="polite">
          {activeTodos} {activeTodos === 1 ? 'item' : 'items'} left
        </span>
        {completedTodos > 0 && (
          <button 
            className="todo-clear" 
            onClick={clearCompleted}
            aria-label={`Clear ${completedTodos} completed ${completedTodos === 1 ? 'item' : 'items'}`}
          >
            Clear completed
          </button>
        )}
      </footer>
    </div>
  )
}

export default TodoList