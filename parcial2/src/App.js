import './App.css';
//import Hello from './components/Hello/Hello.tsx';
import { useEffect, useState } from 'react';
import ContextTest from './components/ContextTest/ContexTest.tsx';
import RefExample from './test/RefExample.tsx';
import Usuariol from './components/ContextTest/Usuariol.tsx';
function App() {

// const [message,setMessage] = useState('Tessting....')
// const [message2,setMessage2] = useState('Tessting....')
// const [message3,setMessage3] = useState('Tessting....')

useEffect(() => {
   // setTimeout(() => setMessage('loaded'),3000);
},[])

  return (
    <div className="App">
     <Usuariol/> 
      {/* <Hello text={message}
      setText = {setMessage}
    />}
    <Hello text ={message2}/> */}
    </div>
  );
}

export default App;
