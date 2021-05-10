import randomColor from 'randomcolor';
import { useState } from 'react';
import './App.css';
import ColorDiv from './ColorDiv';
import RandomColorGenerator from './RandomColorGenerator';

function App() {
  const randomColorHEX = randomColor();
  const [hexcolor, setHexcolor] = useState(randomColorHEX);
  return (
    <div className="container">
      <header className="header">
        <img src="./rdm-color.jpg" alt="logo" />
        <p>Push button to get random HEX color code in desired color</p>
      </header>
      <RandomColorGenerator hexcolor={hexcolor} setHexcolor={setHexcolor} />
      <ColorDiv color={hexcolor} />
    </div>
  );
}

export default App;
