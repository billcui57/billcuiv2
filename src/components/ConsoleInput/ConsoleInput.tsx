import React, { FormEvent, SyntheticEvent } from 'react';
import './ConsoleInput.css';

function ConsoleInput({ setUserInput, userInput,  handlePressedEnter, currDir, handlePressedTab}: {setUserInput: any, handlePressedEnter:any, userInput:any, currDir: string, handlePressedTab:any}) {


  const handleUserTyping = (event:SyntheticEvent ) => {
    let target= event.target as HTMLInputElement;
    
  
    setUserInput(target.value);
    
  }

  const handleUserKeyDown = (event: any) => {
    if(event.key === 'Enter'){
      handlePressedEnter();
    }else if (event.key === "Tab"){
      event.preventDefault()
      //auto complete
      handlePressedTab();
    }
  }


  return (
    <div >
      <p className="text-pink-500 text-2xl pl-1 pt-1 bg-transparent inline" >{"/" + currDir}&gt; </p>
      <input className="text-console-white text-2xl pt-1 bg-transparent inline outline-none w-10/12 text-pink-500 " autoFocus type="text" onChange={handleUserTyping} onKeyDown={handleUserKeyDown} value={userInput}></input>
    </div>
  );
}

export default ConsoleInput;
