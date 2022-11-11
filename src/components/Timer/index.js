import React from "react";
import { useState, useEffect } from "react";
import { DigitText, SymbolText, TimerDiv } from "./style";

// EXAMPLE
//   const [stopState, setStopState] = useState(false);
//   const [curTime] = useState(0);
//   function handleStop(time) {
//     console.log(time)
//   }
//   return (
//     <>
//       <button onClick={() => setStopState(!stopState)}>toggle</button>
//       <Timer isStopped={stopState} onStop={handleStop}></Timer>
//     </>
//   )

function Timer({ interval = 10, isStopped = false, onStop = (t) => {}, setTimePassed }) {
  const RUN = 0,
    STOP = 1;
  const [timerState, setTimerState] = useState(RUN);

  // unit: ms
  const [cummulTime, setCummulTime] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [measuredTime, setMeasuredTime] = useState(+0);

  // text
  const time = cummulTime + measuredTime;
  const minutes = String(Math.floor(time / 1000 / 60) % 60).padStart(2, "0");
  const seconds = String(Math.floor(time / 1000) % 60).padStart(2, "0");
  const miliSeconds = String(Math.floor((time % 1000) / 10)).padStart(2, "0");

  useEffect(() => {
    // on stop
    if (timerState === RUN && isStopped) {
      setTimerState(STOP);
      setMeasuredTime(0);
      setCummulTime(time);
      onStop(time);
      return;
    }

    // restart
    if (timerState === STOP && !isStopped) {
      setTimerState(RUN);
      setStartTime(Date.now());
    }

    // start
    if (timerState === RUN) {
      const timer = setInterval(() => {
        setMeasuredTime(Date.now() - startTime);
        setTimePassed(Date.now() - startTime);
      }, interval);

      return () => {
        clearInterval(timer);
      };
    }
  }, [
    timerState,
    isStopped,
    onStop,
    cummulTime,
    interval,
    startTime,
    measuredTime,
    time,
    setTimePassed,
  ]);

  return (
    <TimerDiv>
      <DigitText>{minutes}</DigitText>
      <SymbolText>:</SymbolText>
      <DigitText>{seconds}</DigitText>
      <SymbolText>.</SymbolText>
      <DigitText>{miliSeconds}</DigitText>
    </TimerDiv>
  );
}

export default Timer;
