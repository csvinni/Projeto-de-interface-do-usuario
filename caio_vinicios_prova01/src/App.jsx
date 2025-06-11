import './App.css'
import Clicks from './componentes/Clicks'
import Carros from './componentes/Carros'
import Filtro from './componentes/Filtro'

function App() {

  return (
    <>
      <Clicks></Clicks>
      <br />
      <br />
      <div className='divlistas'>
        <div>
          <h1>Lista de Carros:</h1>
          <Carros></Carros>
        </div>

        <br />
        <div>
          <h1>Carros superiores a 2019:</h1>
          <Filtro></Filtro>
        </div>
        
      </div>

    </>
  )
}

export default App
