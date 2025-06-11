import cores from './dados'
import { useState } from 'react';

function MudarCor() {
    
    const [cor, SetCor] = useState('')

    function sortear(){
        const aleatorio = Math.floor(Math.random() * cores.length);
        document.body.style.backgroundColor = cores[aleatorio];
        const novacor = cores[aleatorio]
        SetCor(novacor)
    }

  return (
    <div>
        <button onClick={sortear}>Mude a Cor</button>
        <h1>a cor é {cor}</h1>
    </div>
  );
}

export default MudarCor
