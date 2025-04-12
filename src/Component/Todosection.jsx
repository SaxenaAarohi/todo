import React from 'react'
import Todocard from './Todocard'

const Todosection = ({ handleclick, todos, setList }) => {
  return (
    <div className='flex flex-col justify-center items-center mt-8 gap-4'>
      <h2 className='text-center'>Todo</h2>
      <button className='bg-blue-300' onClick={handleclick}>Create Todo</button>
      <div className='flex flex-row justify-center gap-4 flex-wrap'>
        {todos.map(array => {
          if (!array.isCompleted)
            return <Todocard key={array.id} todo={array} setList={setList} />
        })}
        {todos.map(array => {
          if (array.isCompleted)
            return <Todocard key={array.id} todo={array} setList={setList} />
        })}
      </div>
    </div>
  )
}

export default Todosection
