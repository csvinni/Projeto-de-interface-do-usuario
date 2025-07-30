import { useState, useEffect } from "react";

export default function Login() {

  const [login, setLogin] = useState("");
  const [palavra, setPalavra] = useState("");


  const handleLogin = (e) => {
        setLogin(e.target.value)
    };
  const handlePalavra = (e) => {
        setPalavra(e.target.value)
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login, palavra);

    setLogin("");
    setPalavra("");
  };

  useEffect(() => {
    if (palavra == "AlunoIFRN"){
        // Alteracão do Plano de Fundo de acordo com a Palavra-Passe
        document.body.style.backgroundColor = "blue";

    }
  }, [palavra]);

  return (

    <div className="Logindiv">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Login:</label>
          <input type="text" id="login" name="login" onChange={handleLogin} value={login} placeholder="Digite seu login:"/>
        </div>

        <div>
          <label>Palavra-Passe:</label>
          <input type="text" placeholder="Digite sua Palavra-Passe" value={palavra} onChange={handlePalavra}/>
        </div>

        <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
}
