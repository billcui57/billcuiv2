import React, { FC, ReactComponentElement, useEffect, useState } from 'react';
import './Console.css';
import ConsoleLine from '../../components/ConsoleLine/ConsoleLine'
import ConsoleInput from '../../components/ConsoleInput/ConsoleInput';
import { Directory, initializeDir, File } from '../../models/directory';



function Console() {

  let [userInput, setUserInput] = useState<String>();

  const handleGoToRegularVersion = () => {
    
  }

  const initialScreen = [
    <ConsoleLine><div className="text-red-400">💻 Welcome to ✨Bill Cui’s Website✨ LTS (GNU/Linux 4.19.104-microsoft-standard x86_64) 💻</div></ConsoleLine>,
    <ConsoleLine className="mx-4 mt-5"><div className="text-yellow-400 inline">* Documentation:</div>  Bill’s Resume</ConsoleLine>,
    <ConsoleLine className="mx-4"><div className="text-yellow-400 inline">* Management:</div>     https://github.com/billcui57</ConsoleLine>,
    <ConsoleLine className="mx-4"><div className="text-yellow-400 inline">* Support:</div>        https://linkedin.com/in/billcui57</ConsoleLine>,
    <ConsoleLine className="mx-4"><div className="text-yellow-400 inline">* Contact:</div>        billcui2001@hotmail.com</ConsoleLine>,
    <ConsoleLine className="mx-4 mt-5">System information as of <div className="text-green-400 inline">{new Date().toString()}</div></ConsoleLine>,
    <ConsoleLine className="mx-4"><div className="text-yellow-400 inline">Education Status: </div> University of Waterloo Computer Science 2B</ConsoleLine>,
    <ConsoleLine className="mt-5">This message is shown once a visit.</ConsoleLine>,
    <ConsoleLine>Type <div className="text-green-400 inline">help</div> for list of navigation commands</ConsoleLine>,
    // <ConsoleLine>
    //   <div className="text-red-400 inline">Prefer the traditional portfolio style?</div>
    //   <button className="bg-gray-400 rounded-full p-3 mx-2 hover:bg-red-400 hover:text-white cursor-pointer duration-300 ease-in-out text-base text-black " onClick={handleGoToRegularVersion}>Click here!</button>
    // </ConsoleLine>



  ]


  const help = [
    <ConsoleLine className="mx-4"><div className="text-green-400 inline">* ls:</div> list navigation directory</ConsoleLine>,
    <ConsoleLine className="mx-4"><div className="text-green-400 inline">* cd:</div> change navigation directory</ConsoleLine>,
    <ConsoleLine className="mx-4"><div className="text-green-400 inline">* cat:</div> view a file in navigation directory</ConsoleLine>,
    <ConsoleLine className="mx-4"><div className="text-green-400 inline">* clear:</div> clear terminal screen</ConsoleLine>,
  ]

  let [screen, setScreen] = useState<any[]>(initialScreen);


  let [currDir, setCurrDir] = useState<Directory>(
    () => initializeDir()
  );



  useEffect(() => {
    const element = document.getElementById(`bottom${screen.length}`);
    element?.scrollIntoView({ behavior: 'smooth' })
  })


  //autocompletee
  const handlePressedTab = () => {
    //empty command with only whitespaces
    if (userInput?.length === 0 || !userInput?.trim()) {
      //do nothing

    } else if ((userInput.split(" ")) && (userInput.split(" ")[0] === "cd")) {
      let incompleteDir = userInput.split(" ")[1];

      if (incompleteDir) {

        let cand = currDir.subdirectories?.find((dir) => (dir.name.includes(incompleteDir)));
        if (cand) {
          setUserInput(userInput.replace(incompleteDir, cand.name));
        }
      }
    } else if ((userInput.split(" ")) && (userInput.split(" ")[0] === "cat")) {
      let incompleteFile = userInput.split(" ")[1];

      if (incompleteFile) {

        let cand = currDir.files?.find((file) => (file.name.includes(incompleteFile)));
        if (cand) {
          setUserInput(userInput.replace(incompleteFile, cand.name));
        }
      }
    }
  }


  const handlePressedEnter = () => {


    let finalScreen: any[];

    finalScreen = [...screen, <ConsoleLine ><div className="text-pink-500 inline">{"/" + currDir.name}&gt;</div> {userInput}</ConsoleLine>];
    setUserInput("");


    //empty command with only whitespaces
    if (userInput?.length === 0 || !userInput?.trim()) {
      //do nothing

    }
    //help
    else if (userInput === "help") {
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
          currDir.subdirectories?.map((subDir: Directory) => { return <ConsoleLine className="mr-4 inline-block "><div className="text-green-400">{"/" + subDir.name}</div></ConsoleLine> }),
          currDir.files?.map((file: File) => { return <ConsoleLine className="mr-4 inline-block"><div className="text-blue-400">{file.name}</div></ConsoleLine> })
        ]

    }
    //cd
    else if ((userInput.split(" ")) && (userInput.split(" ")[0] === "cd")) {


      if (userInput.split(" ").length !== 2) {
        finalScreen =
          [
            ...finalScreen,
            <ConsoleLine ><div className="text-red-400 inline">Too many arguments</div></ConsoleLine>,
          ]
      } else {
        let requestedDirectory = userInput.split(" ")[1];

        //root
        if (requestedDirectory === "..") {
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


    }
    //cat 
    else if ((userInput.split(" ")) && (userInput.split(" ")[0] === "cat")) {

      if (userInput.split(" ").length !== 2) {
        finalScreen =
          [
            ...finalScreen,
            <ConsoleLine ><div className="text-red-400 inline">Too many arguments</div></ConsoleLine>,
          ]
      } else {
        let requestedFile = userInput.split(" ")[1];
        let cand = currDir.files?.find((file) => (file.name === requestedFile));
        if (cand) {
          finalScreen = [
            ...finalScreen,
            cand.display
          ]
        } else {
          finalScreen =
            [
              ...finalScreen,
              <ConsoleLine ><div className="text-red-400 inline">File name does not exist, type <div className="text-green-400 inline">ls</div> for list of files</div></ConsoleLine>,
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
      <div id={`bottom${finalScreen.length + 1}`} > </div>,
    ]
    setScreen(finalScreen);



  }





  return (
    <div className="animate-fade-in" >
      {screen}
      <ConsoleInput setUserInput={setUserInput} handlePressedEnter={handlePressedEnter} userInput={userInput} currDir={currDir.name} handlePressedTab={handlePressedTab} ></ConsoleInput>
    </div>
  );
}

export default Console;
