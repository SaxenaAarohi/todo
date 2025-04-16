import { useState } from 'react'
import Navbar from './Component/Navbar'
import Carousel from './Component/Carousel'
import Todosection from './Component/Todosection'
import Addtaskmodal from './Component/Addtaskmodal'
function App() {
  const initial =JSON.parse(localStorage.getItem("todos"))||[]

  const [list,setList]=useState(initial);
  const [isclick, setIsclick] = useState(false);
  function handle() {
    setIsclick(!isclick);
  }
  function close() {
    setIsclick(false);
  }
  return (
    <div>
        <Todosection handleclick={handle} todos={list} setList=
        {setList} />
  
      {isclick && <Addtaskmodal setIsclick={setIsclick} closemodal={close} setList={setList}/>}

    </div>
  )
}

export default App
