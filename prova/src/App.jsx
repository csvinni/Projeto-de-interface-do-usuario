
import './App.css'
import Lista from './componentes/Lista'
import NavBar from './componentes/NavBar'
import MudarCor from './componentes/MudarCor'

function App() {
 

  return (
    <>
      <NavBar>
        <Lista></Lista>
      </NavBar>
      <MudarCor></MudarCor>
    </>
  )
}

export default App
