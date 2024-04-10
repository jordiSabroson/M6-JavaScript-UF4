import React from 'react';
import LlistatTasques from './components/LlistatTasques'
import './App.css'
import FormulariTasques from './components/FormulariTasques';

function App() {
  return (
    <div className='App'>
      <LlistatTasques />
      <FormulariTasques/>
    </div>
  );
}

export default App
