import React, { FC, ReactComponentElement, useEffect, useState } from 'react';
import './App.css';
import Console from './components/Console/Console'
import Me from './assets/me.jpg'
import Typewriter from 'typewriter-effect'
import StartingScreen from './components/Regular/Regular';


function App() {


  const goToConsole = () => {
    setDisplayComponent(<Console></Console>)
  }

  const [displayComponent, setDisplayComponent] = useState<any | undefined>(
    <StartingScreen goToConsole={goToConsole}></StartingScreen>
  )





  return (
    <div className="font-console">



      {displayComponent}



    </div>
  );
}

export default App;
