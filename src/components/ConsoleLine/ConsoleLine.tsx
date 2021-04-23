import React from 'react';
import './ConsoleLine.css';


interface ConsoleLineProps {
  children : any,
  className? : any
}


function ConsoleLine({ children, className}: ConsoleLineProps) {
  return (
    <div className = {`px-1 pt-1 ${className}`}>

        <p className={`text-2xl text-console-white`}> {children}</p>


    </div>
  );
}

export default ConsoleLine;
