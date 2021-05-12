import randomColor from 'randomcolor';

export default function RandomColorGenerator(props) {
  const randomColorHEX = randomColor();
  return (
    <div className="interface">
      <button className="btn" onClick={() => props.setHexcolor(randomColorHEX)}>
        Push me to generate HEX color code
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
        {`code: ${props.hexcolor}`}
      </div>
    </div>
  );
}
