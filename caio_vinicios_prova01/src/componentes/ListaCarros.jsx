function ListaCarros({carros}) { 

  return (
    <>
      <h4>{carros.modelo} | {carros.cor} </h4> 
      {/* selecionando as informaçoes especificas para serem renderizadas */}
    </>
  )
}
// componente que vai receber a lista de carros mapeada e irá renderizar

export default ListaCarros
