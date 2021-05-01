import React from 'react';
import './ConsoleLine.css';


interface ConsoleLineProps {
  children: any,
  className?: any
}


function ConsoleLine({ children, className }: ConsoleLineProps) {
  return (
    <div className={`px-1 py-0.5 text-base text-console-white ${className}`}>

      {children}


    </div>
  );
}

export default ConsoleLine;
