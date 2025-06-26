import './Form'
import { useState } from 'react'

// Aqui utilizaremos useState para armanezar o valor dos inputs. Os eventos para formulários será o onChange e o onSubmit

export default function Form(){

    const[tarefa,setTarefa] = useState('')
    const[lista,setLista] = useState([])
 
    const handleTarefa = (e) => {
        setTarefa(e.target.value)
    }
    
    const handleSubmit =(e) => {
        e.preventDefault()
        setLista([...lista, tarefa])
        setTarefa('')
    }

    return(
        <div>

            <h2>Lista de Tarefas</h2>

            {/* Evento onSubmit será disparado quando o formulário for enviado. Aqui, teremos que parar o envio para não
            perder os dados. Utilizaremos o objeto de evento e com o seu atributo prevant.default */}

            <form onSubmit={handleSubmit}>

            {/* <form onSubmit={handleSubmit}> */}

                <div>
                    <label>
                        <span>Tarefa:</span>
                        {/* comentar em sala o atributo value */}
                        <input type="text" name="tarefa" value={tarefa} onChange={handleTarefa} placeholder='Digite a tarefa:' />
                    </label>

                </div>

                <div>
                    <input type="submit" value={'Enviar'} />
                </div>
            </form>

            <ul>
                {lista.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>


        </div>

    )
}