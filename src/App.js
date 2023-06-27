import './App.css';
import './Components/timer.css';
import React from 'react';
import { useState , useEffect } from 'react';

 function App() {
  const [seconds , setSeconds] = useState(0);
  const [minutes , setMinutes] = useState(0) ;
   
 var id;
  useEffect(()=>{
    // if(minutes){
      id = setInterval(()=>{
      setSeconds(seconds+1);

      if(seconds===59){
        setMinutes(minutes+1);
        setSeconds(0);
      }
    },1000)
    return ()=>clearInterval(id);
    
  });

  const restart = ()=>{
    
    setSeconds(0);
    setMinutes(0);
  }

  const stop=()=>{
    clearInterval(id);

  }
 
  return (
 
    <div className='timer'>
      <div className='container'>
        <div className='timer_container'>
  
      
    <h1>Timer</h1>
    <h1>{minutes<10? '0'+minutes:minutes}:{seconds<10? '0'+seconds:seconds}</h1>
    {/* <button onClick={startHandler}>{`${start ?'stop':'start'}`}</button>   */}

    <button className='restart' onClick={restart}>Restart</button>
    <button className='stop' onClick={stop}>Stop</button>  
   
    </div>
    </div>
      </div>
    // </main>
  )
}

export default App;