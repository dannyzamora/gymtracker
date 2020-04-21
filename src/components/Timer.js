import React, { useEffect, useState, useRef } from "react";
import moment from 'moment';

const Timer = ({ timer, setTimer }) => {
  const [start, setStart] = useState(moment(0).seconds(45));
  useEffect(()=>{
    return ()=>{
        setTimer(false)
        console.log("the timer ",timer)
    }
},[])

  const handleClick = () => {
    setTimer(false)
    setStart(moment(0).seconds(45))
  }
  const ref = useRef();
  const handleAdjust = (t) => {
    if (start.isBefore(moment(0).seconds(6)) && t < 0)
      setStart(moment(0).seconds(0, 's'));
    else
      setStart(moment(start).add(t, 's'))
  }
  useEffect(() => {
    if (start.isSame(moment(0))) {
      setTimer(false);
    }
    ref.current = setTimeout(() => {
      timer && setStart(prev => prev.clone().subtract(1, 's'))
    }, 1000);

    return () => {
      clearInterval(ref.current)
      ref.current = null
    }
  }, [start, timer]);

  return (
    <div style={{display:'flex'}}>
      {/* <button onClick={() => { setStatus(!status) }}>{status ? 'Stop' : 'Start'}</button> */}
      <button className='time--button' onClick={() => handleAdjust(5)}>+5</button>

      <div onClick={handleClick}>
        {start.format('mm:ss')}
      </div>

      {/* <button onClick={() => setStart(moment(0).seconds(45))}>RESET</button> */}
      <button className='time--button' onClick={() => handleAdjust(-5)}>-5</button>


    </div>

  );
}

export { Timer as default }