import React, { FC, ReactComponentElement, useEffect, useState } from 'react';
import './App.css';
import Console from './components/Console/Console'
import Me from './assets/me.jpg'


function App() {



  const [mode, setMode] = useState<string | undefined>(undefined)


  const displayStartingScreen = () => {
    return (
      <div>
        <div className="animate-profile-fade-in">
          <img src={Me} className="w-1/3 rounded-full mx-auto mt-10"></img>
          <h1 className=" text-console-white text-center text-4xl mt-4">Hi, I'm Bill Cui.</h1>
        </div>

        <div className="flex justify-center mt-5">
          <input type="button" className="animate-pulse bg-gray-400 rounded-full p-3 mx-2 hover:bg-pink-600 hover:text-white cursor-pointer duration-300 ease-in-out" value="View in Terminal Mode" onClick={() => setMode("terminal")}></input>
          <input type="button" className="animate-pulse bg-gray-400 rounded-full p-3 mx-2 hover:bg-pink-600 hover:text-white cursor-pointer duration-300 ease-in-out" value="View in Regular Mode"></input>
        </div>
      </div>
    )
  }



  return (
    <div className="font-console">



      {mode ? (mode === "terminal" ? <Console></Console> : <Console></Console>) : displayStartingScreen()}



    </div>
  );
}

export default App;
