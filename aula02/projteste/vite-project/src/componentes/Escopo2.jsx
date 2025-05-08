import './Escopo2.css'

function Escopo2(){
    const label = "Clique Aqui"
    const label2 = "Clique Aqui e fique fechosa"

    function butonclik(){
        return(
            console.log("você que clicou é muito fechosa")
        )
    }

    return(
        <>
        <div>
            <button onClick={butonclik}>{label}</button>
        </div>
        </>
    )
}

export default Escopo2