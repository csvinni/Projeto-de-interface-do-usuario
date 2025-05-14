import { useState } from 'react' // tem que ser importado e tem que usar uma variavel pois ela manipula cada variavel 
export default function Change(){
    let [valor, setValor] = useState(0)
    return(
        <div>
            <button onClick = {() => setValor(valor+1)}>{valor}Cliques</button>
        </div>
    )
}