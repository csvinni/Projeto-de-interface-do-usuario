import './App.css'
import Tema from './componentes/Tema.jsx'
import Galeria from './componentes/Galeria.jsx'

const imagens = [
  { src: "/assets/harry.jpg", nome: 'Harry Potter', descricao: "Harry Potter, o garoto que sobreviveu" },
  { src: "/assets/hermione.jpg", nome: 'Hermione Granger', descricao: "Hermione Granger, a mente brilhante" },
  { src: "/assets/malfoy.jpg", nome: 'Draco Malfoy', descricao: "Draco Malfoy, o riquinho chato" },
  { src: "/assets/ginny.jpg", nome: 'Ginny Weasley', descricao: "Ginny Weasley, a namorada de Harry" },
  { src: "/assets/rony.jpg", nome: 'Rony Weasley', descricao: "Rony Weasley, o melhor amigo de Harry" },
  { src: "/assets/voldemort.jpg", nome: 'Voldemort', descricao: "Voldemort, o mais malvado" }
];

export default function App() {
  return (
    <>
      <Tema />
      <Galeria imagens={imagens} />
    </>
  );
}
