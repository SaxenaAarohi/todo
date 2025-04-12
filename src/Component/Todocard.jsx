import React from 'react'

const Todocard = ({ todo, setList }) => {
  function delte() {
    setList(prev => {
      const updated = prev.filter(item => item.id !== todo.id)
      localStorage.setItem("todos", JSON.stringify(updated))
      return updated
    })
  }

  function togglefun() {
    setList(prev => {
      const newlist = prev.map(item => {
        if (item.id === todo.id) {
          item.isCompleted = !item.isCompleted
          return item
        }
        return item
      })
      localStorage.setItem("todos", JSON.stringify(newlist))
      return newlist
    })
  }

  return (
    <div className='h-[300px] w-[300px] bg-[#FF9A9A] p-3 rounded-lg'>
      <div className='flex justify-between'>
        <h3>{todo.title}</h3>
        <button onClick={togglefun}>
          {todo.isCompleted ? "✅" : <div className='border border-black h-[14px] w-[14px]'></div>}
        </button>
      </div>
      <p className='text-sm'>{todo.description}</p>
      <button onClick={delte} className='mt-2 bg-red-400 px-3 py-1 rounded-md'>Delete</button>
    </div>
  )
}

export default Todocard
