import { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import '../styles/AddTodo.css'

function AddTodo() {
  const { addTodo } = useContext(TodoContext)
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addTodo(inputValue.trim())
      setInputValue('')
    }
  }

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="todo-input" 
        placeholder="Add a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        aria-label="New todo input"
      />
      <button 
        type="submit" 
        className="todo-add-button"
        aria-label="Add todo"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo