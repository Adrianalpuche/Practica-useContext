import './Hello.css';
import React, { useEffect } from 'react'

interface HelloComponent{
  text:string,
  setText?: Function,
}


function Hello({text,setText}: HelloComponent) {

    useEffect(() => {
      setTimeout(() => setText && setText('loaded2'),6000);
    },[setText])

  return (
    <div className="App">
    <p>{text}</p>
    </div>
  );
}

export default Hello;
