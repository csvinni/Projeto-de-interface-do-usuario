import { useState } from 'react'
import './Escuro.css'

function Escuro() {
    const [escuro, setEscuro] = useState(false);

    function Mudarcor(){
        setEscuro(!escuro);
        document.body.className = !escuro ? 'escuro' : 'claro';
    }

  return (
    <>
        <button onClick={Mudarcor}>Modo {escuro ? 'claro' : 'escuro'}</button>
    </>
  )
};

export default Escuro
