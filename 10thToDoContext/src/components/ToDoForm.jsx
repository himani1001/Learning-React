//when we write the data and click on the button it adds into the context
import React from 'react'
import { useState } from 'react'
import {useTodo} from "../contexts/ToDoContext"

function ToDoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo() //brought it in from context

    const add = (e) => {  //when add() is called, somebody clicks on that just run addTodo() and pass on the data
        e.preventDefault()
        if (!todo) return
        addTodo({todo, completed: false})
        setTodo("")
    }
  return (
    <form onSubmit={add} className='flex'>
        <input type="text" 
        placeholder='Write Todo...'
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit"
        className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
        >Add</button>
    </form>
  )
}

export default ToDoForm