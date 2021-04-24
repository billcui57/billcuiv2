import React, { FC, ReactComponentElement, useEffect, useState } from 'react';
import './App.css';
import Console from './components/Console/Console'
import Me from './assets/me.jpg'


function App() {


  const displayStartingScreenComing = () => {
    return (

      <div className="animate-profile-fade-in">
        <img src={Me} className="w-1/3 rounded-full mx-auto mt-10"></img>
      </div>

    )
  }

  const displayStartingScreen = () => {
    return (
      <div>
        <div>
          <img src={Me} className="w-1/3 rounded-full mx-auto mt-10"></img>
          <h1 className=" text-console-white text-center text-4xl mt-4 animate-profile-fade-in">Hi, I'm Bill Cui.</h1>
        </div>

        <div className="flex justify-center mt-5 animate-profile-fade-in">
          <input type="button" className="animate-pulse bg-gray-400 rounded-full p-3 mx-2 hover:bg-pink-600 hover:text-white cursor-pointer duration-300 ease-in-out" value="Begin" onClick={() => transitionToConsole()}></input>
        </div>
      </div>
    )
  }

  const displayStartingScreenLeaving = () => {
    return (
      <div className="animate-profile-fade-out ">
        <div >
          <img src={Me} className="w-1/3 rounded-full mx-auto mt-10"></img>
          <h1 className=" text-console-white text-center text-4xl mt-4">Hi, I'm Bill Cui.</h1>
        </div>

        <div className="flex justify-center mt-5">
          <input type="button" className=" bg-gray-400 rounded-full p-3 mx-2 hover:bg-pink-600 hover:text-white cursor-pointer duration-300 ease-in-out" value="Begin"></input>
        </div>
      </div>
    )
  }

  const [displayComponent, setDisplayComponent] = useState<any | undefined>(displayStartingScreenComing())


  const transitionToConsole = () => {
    setDisplayComponent(() => displayStartingScreenLeaving())
    setTimeout(() => {
      setDisplayComponent(<Console></Console>)
    }, 950)
  }

  useEffect(() => {
    setTimeout(() => {
      setDisplayComponent(displayStartingScreen())
    }, 500)
  }, [])



  return (
    <div className="font-console">


      {displayComponent ? displayComponent : undefined}




    </div>
  );
}

export default App;
