import React, { useState,useRef, useEffect } from "react";

const StopTimer = () => {
        const [time,setTime]=useState(0);
        let ref=useRef(null);

        const startTimer=()=>{
          if(ref.current) return;
               ref.current= setInterval(() => {
                    setTime(prev=>prev+1);   
                }, 1000);
        };

const stopTimer=()=>{
  clearInterval(ref.current)
  ref.current=null;
}
const resetTimer=()=>{
  stopTimer()
  setTime(0)
}
const restartTimer=()=>{
  setTime(0);
  startTimer();
}
useEffect(()=>{
  return ()=>stopTimer()
},[])
  return (
    <div className="bg-amber-300 mt-6 px-6 py-4">
      <p>Stop watch {time}</p>
      <div className="flex gap-4 mt-2">
        <button 
        className="bg-green-400 text-white font-bold px-2"
        onClick={startTimer}
        >Start</button>
      <button 
      className="bg-gray-400 text-purple-600 font-bold px-2"
      onClick={stopTimer}
      >Stop</button>
      <button 
      className="bg-gray-600 text-red-600 font-bold px-2"
      onClick={resetTimer}
      >Reset</button>
      <button onClick={restartTimer}>Restart</button>
      </div>
    </div>
  )
}
export default StopTimer