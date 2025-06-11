import { carros } from "./dados_carro";
// importando a lista dos carros
export default function Filtro(){

    const carrosnovos= carros.filter(carro => carro.ano > 2019);
    // filtro por ano de cada carro

    return(
        <div className="carrosnovos">
            {carrosnovos.map(novos => (
                <h4>{novos.modelo}</h4>
            ))}
            {/* mapeando a nova lista de carros apenas com os carros novos e renderizando sua informação */}
        </div>
    )
}
