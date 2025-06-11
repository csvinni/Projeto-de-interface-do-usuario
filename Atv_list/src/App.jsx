import Tema from './Componentes/Tema'
import ListaTarefas from './Componentes/ListaTarefas'
import tarefas from './Componentes/tarefas'
import Detalhes from './Componentes/Detalhes'
import './App.css'

function App() {

  return (
    <div>
      <Tema></Tema>
      <ListaTarefas tarefas={tarefas}></ListaTarefas>
    </div>
     
  )
}

export default App
