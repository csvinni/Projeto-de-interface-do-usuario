export default function Card({ imagens, onSelecionar }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
      {imagens.map(({ src, nome, descricao }, i) => (
        <div
          key={i}
          onClick={() => onSelecionar({ src, nome, descricao })}
          style={{ margin: "0.5rem", textAlign: "center", cursor: "pointer", width: "100px" }}
        >
          <img
            src={src}
            alt={nome}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <p style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>{nome}</p>
        </div>
      ))}
    </div>
  );
}
