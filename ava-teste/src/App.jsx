import './App.css'
import Escuro from './components/Escuro'
import NavBar from './components/NavBar'
import personagens from './components/personagens'
import Galeria from './components/Galeria'
function App() {

  return (
    <>
      <NavBar>
        <Escuro></Escuro>
      </NavBar>
      <Galeria personagens = {personagens}></Galeria>
    </>
  )
}

export default App
