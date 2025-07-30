import { useState, useEffect } from 'react';

export default function Dados() {
    
  const [idFiltro, setIdFiltro] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [ativacao, setAtivacao] = useState(false);
  const [atualizar, setAtualizar] = useState(0);

  useEffect(() => {
    const buscadeDados = async () => {
      setAtivacao(true);

      try {
        const api = await fetch('https://jsonplaceholder.typicode.com/albums');
        const dados = await api.json();
        const filtro = idFiltro === '' ? dados : dados.filter(post => post.userId === Number(idFiltro));
        setDadosFiltrados(filtro);
      }
      finally {
        setAtivacao(false);
      }
    };

    buscadeDados();
  }, [idFiltro, atualizar]);

  return (
    <div>

      <h1>-- Filtro de Tarefas de Usuarios🔍--</h1>
      <input type="number" placeholder="ID do usuario" value={idFiltro} onChange={(e) => setIdFiltro(e.target.value)}/>
      <button onClick={() => setAtualizar(a => a + 1)}>Atualizar Tarefas</button>

      {!ativacao && (

        dadosFiltrados.length === 0 && idFiltro !== '' ? (<p>Não há tarefas para o ID:"{idFiltro}".</p>) : (
          dadosFiltrados.map(tarefa => (
            <>
              <div key={tarefa.id} className='divtarefa'>
                <h3>Titulo: {tarefa.title}</h3>
                <h3>Status: {tarefa.completed} ||| Usuário: {tarefa.userId}</h3>
              </div>
              <br />
            </>
          ))
        )

      )}
    </div>
  );
}
