import { useState } from 'react'
import Navbar from './Component/Navbar'
import Carousel from './Component/Carousel'
import Todosection from './Component/Todosection'
import Addtaskmodal from './Component/Addtaskmodal'
function App() {
  const initial =JSON.parse(localStorage.getItem("todos"))||[]
  
  const [list,setList]=useState(initial);
  const [isclick, setIsclick] = useState(false);
  // const [inputval, setInp] = useState("");
  // const [des, setDes] = useState("");

  function handle() {
    setIsclick(!isclick);
  }
  function close() {
    setIsclick(false);
  }
  return (
    <div>
      <Navbar />
      {/* <Carousel /> */}
        <Todosection handleclick={handle} todos={list} setList=
        {setList} />
  
      {isclick && <Addtaskmodal setIsclick={setIsclick} closemodal={close} setList={setList}/>}

    </div>
  )
}

export default App
