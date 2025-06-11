import { useState } from 'react'
import './clicks.css'
function Clicks() {
    const [count, setCount] = useState(0); //Use state para guardar o valor do incremento utilizado para a contagem
    
    if (count > 10){
        document.getElementsByClassName('soma')[0].style.width = '400px'
        document.getElementsByClassName('soma')[0].style.height = '100px'
    };

    //IF para que quando o valor clicado ultrapasse 10 o CSS do elemento seja alterado

    if (count < 0){
        document.getElementsByClassName('subtracao')[0].style.width = '40px'
    };

    //IF para que quando o valor clicado seja menor que 0 o CSS do elemento seja alterado

    if (count > 0){
        if (count < 10 ){
            document.getElementsByClassName('subtracao')[0].style.width = '150px'
            document.getElementsByClassName('soma')[0].style.width = '150px'
            document.getElementsByClassName('subtracao')[0].style.height = '45px'
            document.getElementsByClassName('soma')[0].style.height = '45px'
        };
    };

    //IF para que quando o valor clicado seja maior que 10 e menor que 0 o CSS do elemento seja alterado
    

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className='soma'>+</button>
        {/* Botão que quando clicado reliza uma função de soma no contador do usestate */}
        <h4>{count}</h4>
        {/* contagem do usestate */}
        <button onClick={() => setCount((count) => count - 1)} className='subtracao'>-</button>
         {/* Botão que quando clicado reliza uma função de subtracao no contador do usestate */}
      </div>
    </>
  )
}

export default Clicks
