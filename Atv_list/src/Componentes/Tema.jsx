import { useState } from "react"
import './Tema.css'

function Tema () {
    const [temaEscuro, setTemaEscuro] = useState(false);

    const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
    document.body.className = !temaEscuro ? "escuro" : "claro";

  };

  return (
    <div>
      <button onClick={alternarTema}>
        Alternar para {temaEscuro ? "claro" : "escuro"}
      </button>

    </div>)
}

export default Tema