import React, { FC, ReactComponentElement, useEffect, useState } from 'react';
import Me from '../../assets/me.jpg'
import Typewriter from 'typewriter-effect'
import { bereavement, mathsoclib, toTheMoon } from '../../models/projects';
import Project from '../Project/Project';


function Regular({ goToConsole }: { goToConsole: any }) {


  const [animationPhase, setAnimationPhase] = useState<String>("entering")

  const handlePressedGoToConsoleButton = () => {
    setAnimationPhase("leaving")
    setTimeout(() => {
      goToConsole()
    }, 1000)
  }


  // useEffect(() => {
  //   setTimeout(() => {
  //     setAnimationPhase("here")
  //   }, 1000)
  // }, [])
  const [doDisplayRest, setDoDisplayRest] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      document.removeEventListener("mousedown", () => setDoDisplayRest(true));
    }
  }, [])

  let animation:any;
  if (animationPhase === "entering") {
    animation = "animate-fade-in-up";
  } else if (animationPhase === "leaving") {
    animation = "animate-fade-out";
  }else if (animationPhase === "here") {
    animation = "animate-fade-in-stay";
  }



  const [doDisplayPrompt, setDoDisplayPrompt] = useState<boolean>(false)


  const displayPrompt = () => {


    document.addEventListener("mousedown", () => {
      setDoDisplayRest(true);
      setDoDisplayPrompt(false);

    })


    return (
      <div className={`animate-fade-in-stay`} >
        <p className="animate-pulse ">Click anywhere</p>
      </div>
    )

  }

  useEffect(() => {
    const element = document.getElementById(`rest`);
    element?.scrollIntoView({ behavior: 'smooth' })
  })


  const displayRest = () => {
    return (
      <div className={`${animation}`} >

       <div id="rest" className = "pb-16"></div>
        <button className="bg-gray-400 rounded-xl p-3 mx-2 hover:bg-gray-600 hover:text-console-white cursor-pointer duration-300 ease-in-out text-xl text-black "  onClick={handlePressedGoToConsoleButton}>Familiar with Linux? Click here</button>
     


        <div className="mt-8">
          <h1 className="text-xl inline bg-gray-600 rounded-lg p-2" >$ whoami</h1>
        </div>



        <h1 className="mt-8 text-xl mb-8">I am a third year <h1 className="inline text-green-400">Computer Science</h1> student at the <h1 className="inline text-yellow-400">University of Waterloo</h1></h1>

        <div className="mt-8">
          <h1 className="text-xl inline bg-gray-600 rounded-lg p-2">$ ls ~/projects</h1>
        </div>


        {[mathsoclib,
          bereavement,
          toTheMoon].map((project) => project.display)}

        <div className="mt-8">
          <h1 className="text-xl inline bg-gray-600 rounded-lg p-2 ">$ cat ~/.work_history</h1>
        </div>


        <h1 className="text-xl text-red-400 mt-8 ">WIP</h1>

        <div className="mt-8">
          <h1 className="text-xl inline bg-gray-600 rounded-lg p-2 ">$ ls ~/hackathons</h1>
        </div>

        <h1 className="text-xl text-red-400 mt-8 ">WIP</h1>

        <div className="mt-8">
          <h1 className="text-xl inline bg-gray-600 rounded-lg p-2 ">$ vim ~/.contact_me</h1>
        </div>

        <h1 className="text-xl text-red-400 mt-8 ">WIP</h1>


      </div>
    )
  }





  return (
    <div className={`${animation}  px-4 text-console-white font-console mx-auto text-center`} >
      <div className={``}>
        <img src={Me} className={`w-1/3 rounded-full mx-auto mt-10 `}></img>
        <div className="flex justify-center items-center mb-4 -space-x-3 text-4xl mt-4 ">
          <Typewriter
            options={{
              autoStart: true,
              delay: 50,
              cursor: ""

            }}

            onInit={(typewriter) => {
              typewriter
                .pauseFor(1500)
                .typeString(`Hi, I'm Bill Cui.`)
                .callFunction(() => setDoDisplayPrompt(true))
                .start();
            }} />
        </div>
      </div>

      {doDisplayPrompt ? displayPrompt() : undefined}
      {doDisplayRest ? displayRest() : undefined}
    </div>

  );
}

export default Regular;
