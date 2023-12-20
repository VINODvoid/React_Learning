/* eslint-disable no-unused-vars */
import {createContext , useContext} from 'react';

export const TodoContext = createContext({
    todos: [
        {id: 1, todo: 'Eat breakfast', completed: false},
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})
export const useTodo = () => { return useContext(TodoContext);}


export const TodoContextProvider = TodoContext.Provider;

