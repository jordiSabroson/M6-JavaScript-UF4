import React, { useState } from 'react';
import './App.css';
import Button from './Button';

const App = () => {

  const [numClics, setNumClicks] = useState(0);

  const incrementNum = () => {
    setNumClicks(numClics + 1);
    console.log("Número de clics incrementat");
  };

  const reiniciarNum = () => {
    setNumClicks(0);
    console.log("Número de clics reiniciat");
  };

  return (
    <>
      <Button text="Clic" onClick={incrementNum} esClick={true} />
      <Button text="Reiniciar" onClick={reiniciarNum} esClick={false} />
      <p>Número de clics: {numClics}</p>
    </>
  );
}

export default App;