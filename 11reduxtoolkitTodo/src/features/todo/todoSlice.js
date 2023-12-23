import {createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:1,
        text:"Learn React-Redux",
    }],
}


export const todoSlice = createSlice(
    {
        name:'todo',
        initialState,
        reducers:{
            addTodo: (state,action) => {
                const todo = {
                    id: nanoid(),
                    text:action.payload.text
                }
                state.todos.push(todo);
            },
            removeTodo: (state,action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
            },
            updateTodo:(state, action) => {
                const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
                state.todos[index].text = action.payload.text;
                    
            }

        }
    }
    );

export const {addTodo , removeTodo , updateTodo} = todoSlice.actions;
export default todoSlice.reducer;