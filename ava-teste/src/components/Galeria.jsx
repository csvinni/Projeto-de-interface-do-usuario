import './galeria.css'

function Galeria({personagens}) {
  return (
    <>
        <div className="galeria">
            {personagens.map((pers, index) =>(
                <div key={index}>
                    <h3>{pers.nome}</h3>
                    <p>{pers.descricao}</p>
                </div>
            ))}
        </div>
    </>
  )
};

export default Galeria
