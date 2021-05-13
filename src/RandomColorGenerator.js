import randomColor from 'randomcolor';

export default function RandomColorGenerator(props) {
  //Random color package
  const randomColorHEX = randomColor();
  // Function handler for useState hook
  const handleSetHex = () => props.setHexcolor(randomColorHEX);

  return (
    <div className="interface">
      <button className="btn" onClick={handleSetHex}>
        Generate color code!
      </button>

      <div
        className="box"
        // In line CSS with JSX
        style={{
          backgroundColor: props.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
        }}
      >
        {`${props.color}`}
      </div>
    </div>
  );
}
