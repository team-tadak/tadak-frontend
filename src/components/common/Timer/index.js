import { useEffect } from "react";

function Timer({ minutes, setMinutes, seconds, setSeconds }) {
  // const [minutes, setMinutes] = useState(1);
  // const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds, setMinutes, setSeconds]);

  return (
    <div className="App">
      <h1>CountDown!</h1>
      <div>
        <h2>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>
      </div>
    </div>
  );
}

export default Timer;
