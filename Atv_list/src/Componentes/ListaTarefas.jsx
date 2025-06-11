import { useState } from "react";
import './ListaTarefas.css';
import Detalhes from "./Detalhes";

function ListaTarefas({ tarefas }) {
  const [concluidos, setConcluidos] = useState(
    tarefas.map(() => false) 
  );

  const [selecionada, setSelecionada] = useState(null);


  const alternar = (index) => {
    const novosConcluidos = [...concluidos];
    novosConcluidos[index] = !novosConcluidos[index];
    setConcluidos(novosConcluidos);
  };

  return (
    <div className="tarefas">
      {tarefas.map((char, index) => (
        <div key={index} className={concluidos[index] ? "concluida" : "nao-concluida"} onClick={() => setSelecionada(char)}
        >

          <h1>{char.titulo}</h1>
          <p>{char.descricao}</p>
          <button onClick={() => alternar(index)}>
            Marcar como {concluidos[index] ? "não concluída" : "concluída"}
          </button>
        </div>
      ))}
       {selecionada && <Detalhes tarefa={selecionada} />} 
    </div>
  );
}

export default ListaTarefas;
