import { createContext, useContext } from "react";


export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todoMsg:"Msg",
            isCompleted:false
        },
    ],
    addTodo:(todoMsg)=>{},
    updateTodo:(id,todoMsg)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const TodoProvider=TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext);
}


