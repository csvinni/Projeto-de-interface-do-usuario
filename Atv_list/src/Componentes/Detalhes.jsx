
export default function Detalhes({ tarefa }) {
    return (
      <div className='detalhes'>
        <h2>Detalhes da tarefa</h2>
        <h3>{tarefa.titulo}</h3>
        <p>{tarefa.descricao}</p>
      </div>
    );
  }
  
    