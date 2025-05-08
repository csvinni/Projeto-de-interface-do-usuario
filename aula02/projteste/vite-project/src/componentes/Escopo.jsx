import './Escopo.css'

function Escopo(){
    const label = "Clique Aqui"
    return(
        <>
        <div>
            <h2>Teste de componetes</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ab architecto explicabo sit numquam suscipit quis ipsum quos nihil. Magni molestias eos numquam incidunt accusantium dicta quisquam excepturi aliquam suscipit.</p>
        </div>
        <div>
            <button onClick={() => console.log("você que clicou é muito lindo")}>{label}</button>
        </div>
        </>
    )
}

export default Escopo