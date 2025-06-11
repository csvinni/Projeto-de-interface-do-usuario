export default function Detalhes({ personagem }) {
    if (!personagem) return null;
  
    return (
      <div style={{ marginTop: "2rem" }}>
        <h2>{personagem.nome}</h2>
        <img
          src={personagem.src}
          alt={personagem.nome}
          style={{ width: "200px", borderRadius: "8px", marginTop: "1rem" }}
        />
        <p>{personagem.descricao}</p>
      </div>
    );
  }
  