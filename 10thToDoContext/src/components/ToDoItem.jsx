import React, { useState } from 'react'
import { useTodo } from '../contexts/ToDoContext'

const ToDoItem = ({ todo }) => { // Accept the todo prop

    const [isTodoEditable, setTodoEditable] = useState(false) // Fixed typo, whetther the todo is editable or not
    const [toDoMssg, setToDoMssg] = useState(todo.todo) // what's the todo message and passing all the todo's 

    const { updateTodo, deleteTodo, toggleComplete } = useTodo()    //functionality we bought from useTodo

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: toDoMssg })
        setTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
        >
            <input type="checkbox"
                className='cursor-pointer'
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input type="text"  //conditional rendering
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`}
                value={toDoMssg}
                onChange={(e) => setToDoMssg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-indigo-400 hover:bg-gray-100 shrink-0 disabled:opacity-50'
                onClick={() => {
                    if (todo.completed) return
                    if (isTodoEditable) {
                        editTodo()
                    } else setTodoEditable((prev) => !prev)
                }}
                disabled={todo.completed}
            >{isTodoEditable ? "save" : "edit"}</button> {/* Fixed typo */}
            <button
                className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-indigo-400 hover:bg-gray-100 shrink-0'
                onClick={() => deleteTodo(todo.id)}
            >close</button>
        </div>
    )
}

export default ToDoItem
