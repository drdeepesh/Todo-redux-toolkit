import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { RiDeleteBin6Line } from "react-icons/ri";

const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
        <div className='mt-5'>Todos</div>
        <ul className='list-none w-full'>
            {todos.map((todo) => (
                <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded' 
                key={todo.id}>
                    <div className="text-white"> {todo.text} </div>
                    
                    <button 
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className='text-white bg-red-500  border-0 py-2 px-6 hover:bg-red-600 rounded text-lg'
                    >
                        <RiDeleteBin6Line />
                    </button>  
                    {/* // dispatch removeTodo action when a todo is clicked to remove it.  Note: the dispatch function is used to trigger actions.  It is a centralized way to manage state updates across your application.  It is a way to pass the Redux store's dispatch function down through your application's component hierarchy.  The useSelector hook is used to subscribe to state updates and select the relevant data for your components.  It's a powerful tool for managing state in your React applications.  It's a great way to reduce boilerplate code and make your application more efficient and maintainable.  It's also a great way to make your application more predictable and easier to debug.  It's a great way to make your application more scalable and easier to maintain.  It's a great way to make your application more secure and easier to protect.  It's a */}
                </li>
            ))}
        </ul>
    </>
  )
}

export default Todos