function Escopo2(){

    function butonclik(){
        const cor = ['#0000ff', '#ffee00','#5f9ea0','#bb3ba6']
        const random = cor[Math.floor(Math.random() * cor.length)];
        document.body.style.backgroundColor = random;

        return(
            console.log("você que clicou é muito fechosa")
        )
    }

    return(
        <>
        <div>
            <button onClick={butonclik}>mude a cor</button>
        </div>
        </>
    )
}

export default Escopo2