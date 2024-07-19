import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: 'Himani'}],
}

export const todoSlice = createSlice({
    name: 'todo',   //it amy confuse later on what slice denote what
    initialState,   //so somebody could track what'sat the initial position
    reducers: {
        addTodo: (state, action) => {
            const todo = {   //create todo
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)  //used state to push info in todo's
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)//filter out on each element and whenever you see that create a new array in which dont include the ID you are passing
        },
    }
})

//you need to export the reducers and methods you made

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer //this needs to be wired up with the store