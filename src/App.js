import './App.css';
import ColorDiv from './ColorDiv';
import RandomColorGenerator from './RandomColorGenerator';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="./rdm-color.jpg" alt="logo" />
        <p>Push button to get random HEX color code in desired color</p>
      </header>
      <RandomColorGenerator />
      <ColorDiv />
    </div>
  );
}

export default App;
