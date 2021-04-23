import React, { FormEvent, SyntheticEvent } from 'react';
import './ConsoleInput.css';

function ConsoleInput({ setUserInput, userInput,  handlePressedEnter, currDir}: {setUserInput: any, handlePressedEnter:any, userInput:any, currDir: string}) {


  const handleUserTyping = (event:SyntheticEvent ) => {
    let target= event.target as HTMLInputElement;
    
  
    setUserInput(target.value);
    
  }

  const handleUserKeyDown = (event: any) => {
    if(event.key === 'Enter'){
      handlePressedEnter();
    }
  }


  return (
    <div >
      <p className="text-pink-500 text-2xl pl-1 pt-1 bg-transparent inline" >{"/" + currDir}&gt; </p>
      <input className="text-console-white text-2xl pt-1 bg-transparent inline outline-none w-10/12 text-pink-500" type="text" onChange={handleUserTyping} onKeyDown={handleUserKeyDown} value={userInput}></input>
    </div>
  );
}

export default ConsoleInput;
