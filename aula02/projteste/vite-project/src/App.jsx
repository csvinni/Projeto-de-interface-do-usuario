import { useState } from 'react'
import './App.css'
import Escopo from './componentes/Escopo'
import Escopo2 from './componentes/Escopo2'
import Redux from './componentes/Redux'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Escopo></Escopo>
      <Escopo></Escopo>
      <Escopo2></Escopo2>
      <Redux></Redux>
    </>

    
  )
}

export default App
