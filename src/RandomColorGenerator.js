import randomColor from 'randomcolor';
import { useState } from 'react';

export default function RandomColorGenerator() {
  const randomColorHEX = randomColor();
  const [hexcolor, setHexcolor] = useState(randomColorHEX);
  return (
    <div>
      <button className="btn" onClick={() => setHexcolor(randomColorHEX)}>
        Push me to generate HEX color code
      </button>
      <div>{`##########  ${hexcolor}  ##########
      `}</div>
    </div>
  );
}
