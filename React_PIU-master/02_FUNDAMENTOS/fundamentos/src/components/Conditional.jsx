import { useState } from "react"
import Images from "./Images";
import Redux from "./Redux";

export default function Troca(){
    let [valor, setValor] = useState(0);
    let isLogged = false;

    if (valor % 2 === 0){

        isLogged = false 
    }else{
        isLogged = true
    };

    return(

        <>
            <div>
                <button onClick={() => setValor(valor+1)}>Cliques</button>
            </div>

            {isLogged ? <Redux></Redux> : <Images></Images>}
        </>
    )

}