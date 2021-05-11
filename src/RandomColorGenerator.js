import randomColor from 'randomcolor';
export default function RandomColorGenerator(props) {
  const randomColorHEX = randomColor();
  return (
    <div>
      <button className="btn" onClick={() => props.setHexcolor(randomColorHEX)}>
        Push me to generate HEX color code
      </button>

      <div
        className="box"
        style={{
          backgroundColor: props.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          {`#######     ${props.hexcolor}     ########
      `}
        </div>
      </div>
    </div>
  );
}
