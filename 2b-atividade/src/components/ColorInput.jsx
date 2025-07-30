// RandomColorChanger.jsx
import React, { useState, useEffect } from 'react';

function ColorInput() {
  // Lista de cores predefinidas
  const colors = [
    'red', 'blue', 'green', 'purple', 'orange', 'pink', 'teal', 'gold',
    'lightblue', 'lightgreen', 'salmon', 'plum', '#FF5733', '#33FF57', '#5733FF'
  ];

  // 1. Estado para guardar a cor atual do background
  const [currentColor, setCurrentColor] = useState('#ffffff'); // Inicia com branco

  // 2. Estado para o valor do input (não usaremos diretamente para a cor, mas para disparar a mudança)
  const [inputText, setInputText] = useState('');

  // Função para sortear uma cor da lista
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  // 3. useEffect para aplicar a cor de fundo ao <body>
  useEffect(() => {
    document.body.style.backgroundColor = currentColor;
  }, [currentColor]); // Este efeito roda toda vez que 'currentColor' muda

  // 4. Função para lidar com a mudança no input
  const handleChange = (event) => {
    setInputText(event.target.value); // Atualiza o texto do input
    setCurrentColor(getRandomColor()); // Sorteia e define uma nova cor!
  };

  return (
    <div className="color-changer-container">
      <h1>Mudar Cor de Fundo Aleatoriamente</h1>
      <p>Comece a digitar no campo abaixo para mudar a cor de fundo:</p>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Digite algo aqui..."
        className="color-changer-field"
      />
      <p>Última cor gerada: **{currentColor.toUpperCase()}**</p>
    </div>
  );
}

export default ColorInput;