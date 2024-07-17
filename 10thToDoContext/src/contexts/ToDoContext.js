import {createContext, useContext} from "react"


export const ToDoContext = createContext({
    todos: [    //data will go here
        {
            id: 16,
            todo: "Todo Message",
            completed: false
        }
    ],
    //functionality
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {  //make own hook useTodo to ado all this when pass on as a hook
    return useContext(ToDoContext)  //use useContext hook to provide ToDoContext 
}

export const ToDoProvider = ToDoContext.Provider