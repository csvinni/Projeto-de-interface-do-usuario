import { useState } from "react";
import Card from "./Card";
import Detalhes from "./Detalhes";

export default function Galeria({ imagens }) {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <Card imagens={imagens} onSelecionar={setImagemSelecionada} />
      <Detalhes personagem={imagemSelecionada}/>
    </div>
  );
}
