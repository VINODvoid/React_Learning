import {useSelector , useDispatch}  from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'



function Todos() {
const todos = useSelector(state => state.todos)
const dispatch = useDispatch()
  return (
    <>
    <div>
      Todos
    </div>
    <ul className='list-none'></ul>
    {todos.map((todo)=> (
        <li key={todo.id}
        className='mt-4 flex justify-center items-center bg-zinc-800 px-4 py-2 rounded'>
            <div className='text-white'>
            {todo.text}
            </div>

            <button onClick={()=> dispatch(removeTodo(todo.id))}
            className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
            > X </button>
        </li>

  ))}
  </>
  )
}

export default Todos
