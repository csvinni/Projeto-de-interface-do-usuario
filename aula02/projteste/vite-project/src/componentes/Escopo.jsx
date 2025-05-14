import './Escopo.css'

function Escopo(){
    const label = "Clique Aqui"
    return(
        <>
        <div>
            <h2>Teste de componetes</h2>
        </div>
        <div>
            <button onClick={() => console.log("você que clicou é muito lindo")}>{label}</button>
        </div>
        </>
    )
}

export default Escopo