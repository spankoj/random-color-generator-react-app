import randomColor from 'randomcolor';

const AskHueandLum = (props) => {
  //Random color package hue & luminosity
  const randomHue = randomColor({
    hue: `${props.hueInput}`,
    luminosity: `${props.lumInput}`,
  });

  const handleChange = (e) => props.setHueInput(e.target.value);
  const handleInput = () => {
    props.setHexcolor(randomHue);
  };
  const handleDel = () => {
    props.setHueInput('');
  };
  const handleLum = (event) => props.setLumInput(event.target.value);

  return (
    <div className="input">
      <div className="a">
        <h3>Hue</h3>
        <input
          onChange={handleChange}
          placeholder={'Hue'}
          value={props.hueInput}
        />
      </div>
      <div className="b">
        <h3>Luminosity</h3>
        <select name="luminosity" id="lum" onChange={handleLum}>
          <option value="">--Please choose an option--</option>
          <option value="bright">Bright</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <button className="c btn-input" onClick={handleInput}>
        Enter
      </button>
      <button className="d btn-input" onClick={handleDel}>
        Delete
      </button>
    </div>
  );
};

export default AskHueandLum;
