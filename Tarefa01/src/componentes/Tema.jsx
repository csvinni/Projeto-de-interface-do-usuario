import { useState} from "react";
export default function Tema() {
    const [darkMode, setDarkMode] = useState(false);
  
    document.body.style.backgroundColor = darkMode ? "#121212" : "#f9f9f9";
    document.body.style.color = darkMode ? "#fff" : "#000";
    document.body.style.transition = "background-color 0.3s, color 0.3s";
    document.body.style.margin = "0";

    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            Tema: {darkMode ? "Claro" : "Escuro"}
        </button>
    );
  }
   