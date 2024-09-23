import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-400 flex flex-col items-center p-10">
        <h1>Learn About Redux Toolkit ♲</h1>
        <AddTodo/>
        <Todos/>
      </div>
    </>
  )
}

export default App