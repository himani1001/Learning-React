import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoProvider } from './contexts'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo => (prevTodo.id === todo.id ? todo : prevTodo))))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filters((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  //there is no dependency array, as soon as the component will mount this hook will be rendered or activated
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('Todos'))
    if (todos && todos.length > 0) {
      setTodos(todos) //we can't add dependdency array of [todos] because this whole thing will run again and we want to run this at 1st start but not after that so we will use more than one hook 
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <ToDoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}> {/* via value you can import the objects that are their */}
      <h1>FFFFFFFF</h1>
    </ToDoProvider>
  )
}

export default App
