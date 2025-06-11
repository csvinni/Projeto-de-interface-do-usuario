import ListaCarros from "./ListaCarros"; // importando Lista carros onde vai receber os atributos mapeados de Carros
import { carros } from "./dados_carro"; // importando a lista de carros que vai ser utilizada no componente ListaCarros

export default function Carros() {
    return (
      <div>
        {carros.map((car, i) => ( //mapenado a lista de carros 
          <div>
            <ListaCarros key={i} carros={car}></ListaCarros>
          </div>
          //utilizando o componente Listacarros e passando o atributo carros que será utulizado nele
        ))}
      </div>
    );
  }
  