import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import AskHueandLum from './AskHueandLum';
import RandomColorGenerator from './RandomColorGenerator';
import image from './rdm-color.jpg';

// CSS in JS with @emoition library
const bold = css`
  color: steelblue;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

function App() {
  // useState hooks lifted up
  const [hexcolor, setHexcolor] = useState('Your color is on its way!');
  const [hueInput, setHueInput] = useState('example: blue');
  const [lumInput, setLumInput] = useState('');

  return (
    <div className="container">
      <header className="header">
        <h1 css={bold}>Random Color Generator</h1>
        <img src={image} alt="logo" className="img" />
        <h2 css={bold}>1. Random HEX color</h2>
      </header>
      <RandomColorGenerator
        setHexcolor={setHexcolor}
        color={hexcolor}
        setHueInput={setHueInput}
      />
      <h2 css={bold}>2. Customised HEX color</h2>
      <AskHueandLum
        hueInput={hueInput}
        setHueInput={setHueInput}
        setHexcolor={setHexcolor}
        lumInput={lumInput}
        setLumInput={setLumInput}
      />
    </div>
  );
}

export default App;
