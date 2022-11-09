import { useState } from "react";

function DrumPad({sample, setDisplayedPad}) {
  return (
    <button className="drum-pad" id={sample.id} onClick={(e) => {
      setDisplayedPad(sample.id);                                              
      e.target.firstChild.play();
    }}>
      <audio className="clip" id={sample.text} src={sample.src}></audio>
      {sample.text}</button>
  )
}

function App() {
  const [displayedPad, setDisplayedPad] = useState('');

  document.onkeydown = handleKeydown;
  return (
    <div className="drum-machine" id="drum-machine">
      <div className="pads">
        {samples.map(sample => {
          return (<DrumPad key={sample.id} sample={sample} setDisplayedPad={setDisplayedPad}/>)
        })}
      </div>
      <p className="display" id="display">{displayedPad}</p>
    </div>
  );
}

export default App;

function handleKeydown(e) {
  const element = document.getElementById(e.key.toUpperCase());
  element && element.parentElement.click();
}

const samples = [
  {id: 'Heater-1', text: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
  {id: 'Heater-2', text: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
  {id: 'Heater-3', text: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
  {id: 'Heater-4', text: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
  {id: 'Clap', text: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
  {id: 'Open-HH', text: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
  {id: 'Kick-n-Hat', text: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
  {id: 'Kick', text: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
  {id: 'closed-HH', text: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
];