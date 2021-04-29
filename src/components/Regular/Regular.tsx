import React, { FC, ReactComponentElement, useEffect, useState } from 'react';
import Me from '../../assets/me.jpg'
import Typewriter from 'typewriter-effect'


function Regular({ goToConsole }: { goToConsole: any }) {


  const [phase, setPhase] = useState<String>("entering")

  const displayCool = () => {
    let animation;
    if (phase === "entering") {
      animation = "animate-fade-in";
    } else if (phase === "leaving") {
      animation = "animate-fade-out";
    }

    return (
      <div className={`${animation} text-console-white px-4`}>
        <img src={Me} className={`w-1/3 rounded-full mx-auto mt-10 ${animation}`}></img>

        <div className="flex flex-nowrap justify-center items-center mb-6 -space-x-3 text-4xl mt-4 ">
          <h1>Hi, I'm</h1>
          <Typewriter
            options={{
              autoStart: true,
              delay: 50,

            }}

            onInit={(typewriter) => {
              typewriter
                .pauseFor(500)
                .typeString(`\xA0 Bill Cui.`)
                .pauseFor(500)
                .deleteAll()
                .pauseFor(500)
                .typeString(`\xA0 a fullstack developer.`)
                .pauseFor(500)
                .deleteAll()
                .pauseFor(500)
                .typeString(`\xA0 a devops geek.`)
                .pauseFor(500)
                .deleteAll()
                .pauseFor(500)
                .typeString(`\xA0 a Taylor Swift fan.`)
                .pauseFor(500)
                .deleteAll()
                .pauseFor(500)
                .typeString(`\xA0 a runner.`)
                .pauseFor(500)
                .deleteAll()
                .typeString(`\xA0 Bill Cui.`)
                .start();
            }} />
        </div>
      </div>
    )
  }

  const displayRest = () => {
    let animation;
    if (phase === "here") {
      animation = "animate-fade-in";
    } else if (phase === "leaving") {
      animation = "animate-fade-out";
    }

    if (phase !== "entering") {

      return (
        <div className={`${animation} text-console-white mx-auto container px-4 text-center`}>




          <h1 className="rounded-2xl p-3 bg-yellow-800 inline">$ whoami</h1>
          <p className="text-2xl mt-4 ">I currently study at the University of Waterloo as a third year Computer Science student</p>
          <div className="flex justify-center items-center ">
            <input type="button" className="animate-pulse bg-gray-400 rounded-2xl p-3 mx-2 hover:bg-red-400 hover:text-white cursor-pointer duration-300 ease-in-out " value="Begin" onClick={() => handlePressedGoToConsoleButton()}></input>
          </div>





        </div>)

    }


  }


  const handlePressedGoToConsoleButton = () => {
    setPhase("leaving")
    setTimeout(() => {
      goToConsole()
    }, 950)
  }


  useEffect(() => {
    setTimeout(() => {
      setPhase("here")
    }, 500)
  }, [])

  return (
    <div className="font-console">

      {displayCool()}
      {displayRest()}





    </div>
  );
}

export default Regular;
