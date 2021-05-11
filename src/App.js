import randomColor from 'randomcolor';
import { useState } from 'react';
import './App.css';
import ColorDiv from './ColorDiv';
import RandomColorGenerator from './RandomColorGenerator';

function App() {
  //Random color package
  const randomColorHEX = randomColor();
  // useState hook for changing hex color states
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
