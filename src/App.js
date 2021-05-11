/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';
import './App.css';
import RandomColorGenerator from './RandomColorGenerator';
import image from './rdm-color.jpg';

function App() {
  //Random color package
  const randomColorHEX = randomColor();
  // useState hook for changing hex color states
  const [hexcolor, setHexcolor] = useState(randomColorHEX);
  // CSS in JS with @emoition library
  const bold = css`
    color: steelblue;
    font-weight: bold;
  `;

  return (
    <div className="container">
      <header className="header">
        <h2 css={bold}>Push button below to get random HEX color!</h2>
        <img src={image} alt="logo" className="img" />
      </header>
      <RandomColorGenerator
        hexcolor={hexcolor}
        setHexcolor={setHexcolor}
        color={hexcolor}
      />
    </div>
  );
}

export default App;
