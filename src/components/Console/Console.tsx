import React, { FC, ReactComponentElement, useEffect, useState } from 'react';
import './Console.css';
import ConsoleLine from '../../components/ConsoleLine/ConsoleLine'
import ConsoleInput from '../../components/ConsoleInput/ConsoleInput';
import { Directory, getRootDir } from '../../models/directory';


function Console() {

  let [userInput, setUserInput] = useState<String>();


  const initialScreen = [
    <ConsoleLine><div className="text-red-400">💻 Welcome to ✨Bill Cui’s Website✨ LTS (GNU/Linux 4.19.104-microsoft-standard x86_64) 💻</div></ConsoleLine>,
    <ConsoleLine className="mx-4 mt-5"><div className="text-yellow-400 inline">* Documentation:</div>  Bill’s Resume</ConsoleLine>,
    <ConsoleLine className="mx-4"><div className="text-yellow-400 inline">* Management:</div>     https://github.com/billcui57</ConsoleLine>,
    <ConsoleLine className="mx-4"><div className="text-yellow-400 inline">* Support:</div>        https://linkedin.com/in/billcui57</ConsoleLine>,
    <ConsoleLine className="mx-4"><div className="text-yellow-400 inline">* Contact:</div>        billcui2001@hotmail.com</ConsoleLine>,
    <ConsoleLine className="mx-4 mt-5">System information as of <div className="text-green-400 inline">{new Date().toString()}</div></ConsoleLine>,
    <ConsoleLine className="mx-4"><div className="text-yellow-400 inline">Education Status: </div> University of Waterloo Computer Science 2B</ConsoleLine>,
    <ConsoleLine className="mt-5">This message is shown once a visit.</ConsoleLine>,
    <ConsoleLine>Type <div className="text-green-400 inline">help</div> for list of navigation commands</ConsoleLine>
  ]


  const help = [
    <ConsoleLine className="mx-4"><div className="text-green-400 inline">* ls:</div> list navigation directory</ConsoleLine>,
    <ConsoleLine className="mx-4"><div className="text-green-400 inline">* cd:</div> change navigation directory</ConsoleLine>,
    <ConsoleLine className="mx-4"><div className="text-green-400 inline">* cat:</div> view a file in navigation directory</ConsoleLine>,
    <ConsoleLine className="mx-4"><div className="text-green-400 inline">* clear:</div> clear terminal screen</ConsoleLine>,
  ]

  let [screen, setScreen] = useState<any[]>(initialScreen);


  let [currDir, setCurrDir] = useState<Directory>(
    () => getRootDir()
  );



  useEffect(() => {
    const element = document.getElementById("bottom");
    element?.scrollIntoView({ behavior: 'smooth' })
  })





  const handlePressedEnter = () => {


    let finalScreen: any[];

    finalScreen = [...screen, <ConsoleLine ><div className="text-pink-500 inline">{"/" + currDir.name}&gt;</div> {userInput}</ConsoleLine>];
    setUserInput("");


    //empty command with only whitespaces
    if (userInput?.length === 0 || !userInput?.trim()) {
      //do nothing

    }
    //help
    else if (userInput == "help") {
      finalScreen =
        [
          ...finalScreen,
          help
        ]
    }
    //clear
    else if (userInput === "clear") {
      finalScreen = [];
    }
    //ls
    else if (userInput === "ls") {
      finalScreen =
        [
          ...finalScreen,
          currDir.subdirectories?.map((subDir: Directory) => { return <ConsoleLine className="mr-4 inline-block "><div className="text-green-400">{"/" + subDir.name}</div></ConsoleLine> })
        ]

    }
    //cd
    else if ((userInput.split(" ")) && (userInput.split(" ")[0] == "cd")) {
      let requestedDirectory = userInput.split(" ")[1];


      //root
      if (requestedDirectory == "..") {
        let prevDir = currDir.parent;
        if (prevDir) {
          setCurrDir(prevDir);
        } else {
          finalScreen =
            [
              ...finalScreen,
              <ConsoleLine ><div className="text-red-400 inline">Root directory does not have a parent directory</div></ConsoleLine>,
            ]
        }
      }
      //elsewhere
      else {
        let cand = currDir.subdirectories?.find((dir) => ((dir.name === requestedDirectory) || (("/" + dir.name) === requestedDirectory)));
        if (cand) {
          setCurrDir(cand)
        } else {
          finalScreen =
            [
              ...finalScreen,
              <ConsoleLine ><div className="text-red-400 inline">Directory name does not exist, type <div className="text-green-400 inline">ls</div> for list of directories</div></ConsoleLine>,
            ]
        }
      }
    }
    //invalid command
    else {
      finalScreen =
        [
          ...finalScreen,
          <ConsoleLine ><div className="text-red-400 inline">Invalid command, type <div className="text-green-400 inline">help</div> for list of navigation commands</div></ConsoleLine>,
        ]
    }


    finalScreen = [
      ...finalScreen,
      <div id="bottom" > </div>,
    ]
    setScreen(finalScreen);



  }



  return (
    <div className = "animate-profile-fade-in">
      {screen}
      <ConsoleInput setUserInput={setUserInput} handlePressedEnter={handlePressedEnter} userInput={userInput} currDir={currDir.name} ></ConsoleInput>
    </div>
  );
}

export default Console;
