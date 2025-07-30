import ChangeTheme from './components/changetheme'
import './Theme.css'; // Importe seu arquivo CSS global aqui
import './color-styles.css'; // Importe seu novo arquivo CSS aqui
import ColorInput from './components/ColorInput.jsx';

function App() {

  return (
    <>
    <ChangeTheme></ChangeTheme>
    <ColorInput></ColorInput>
    </>
  )
}

export default App
