import React, { useState } from 'react'

const Addtaskmodal = ({ setIsclick, closemodal, setList }) => {
  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  

  function handleinp(e) {
    setInput(e.target.value);
  }
  function handledes(e) {
    setDescription(e.target.value);
  }
  function addtask() {
    const newlist = {
      id: Date.now(),
      title: input,
      description: description,
      isCompleted: false,
    };
    setList((prev) => {
      localStorage.setItem("todos",JSON.stringify([...prev, newlist]))
      return [...prev, newlist]
    })
    closemodal();
  }

  return (
    <div className=' fixed flex justify-center items-center  top-0 bg-black/50 left-0 w-full h-full backdrop-blur-sm'>
      <div className='relative h-[300px] w-[300px] bg-red-200'>
        <button className='absolute -top-3 -right-2' onClick={closemodal}>X</button>
        <input type='text' className='h-8 m-6 w-[80%]' onChange={handleinp}></input>
        <textarea name="" id="" placeholder='Description' onChange={handledes} className='h-[180px] w-[80%] ml-7'></textarea>
        <button className='bg-blue-300 ml-28 mt-2' onClick={addtask} >Add Task </button>
      </div>
    </div>
  )
}

export default Addtaskmodal
