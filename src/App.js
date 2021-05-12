import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';
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
    text-align: center;
    margin-top: 20px;
  `;

  return (
    <div className="container">
      <header className="header">
        <img src={image} alt="logo" className="img" />
        <h2 css={bold}>Push button below to get random HEX color!</h2>
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
