// ChangeTheme.jsx
import React, { useState, useEffect } from 'react';

function ChangeTheme() {
  // O tema inicial é 'light'.
  const [theme, setTheme] = useState('light');

  // Usa useEffect para aplicar a classe do tema ao <body> do HTML.
  // Este efeito roda toda vez que o 'theme' muda.
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Função para mudar o tema entre 'light' e 'dark'.
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="theme-changer-container">
      <h1>Alternador de Tema</h1>
      <p>Tema Atual: **{theme.toUpperCase()}**</p>
      <button onClick={toggleTheme} className="theme-toggle-button">
        Mudar para Modo {theme === 'light' ? 'Escuro' : 'Claro'}
      </button>
    </div>
  );
}

export default ChangeTheme;