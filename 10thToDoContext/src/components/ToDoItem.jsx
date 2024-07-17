import React from 'react'
import { useState } from 'react'
import { useTodo } from '../contexts/ToDoContext'

const ToDoItem = () => {

    const [isToDoEditable, setToDoEditable] = useState(false)
    const [toDoMssg, setToDoMssg] = useState(todo.todo) //passing all the todo's

    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: toDoMssg })
        setToDoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-white/50 duration-300 text-black ${todo.toggleCompleted ? 'bg-[#22c55e]' : 'bg-[#06b6d4]'}`}>
            <input type="checkbox"
            className='cursor-pointer' 
            checked = {todo.completed}
            onChange={toggleCompleted}/>
            <input type="text" 
            className={`border outline-none w-full bg-transparent rounded-lg ${isToDoEditable ? 'border-black/10 px-2' : 'border-transparent'}`}
            value={toDoMssg}
            onChange={(e) => setToDoMssg(e.target.value)}
            readOnly={!isToDoEditable}/>
            <button
            className=''>{isToDoEditable ? 'save' : 'edit'}</button></div>
    )
}

export default ToDoItem