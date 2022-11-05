import { useEffect } from "react";
import styled from "@emotion/styled";
const TimeFont = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
  width: 200px;
  height: 80px;
  background-color: #1f263d;
  border-radius: 10px;
`;

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
      <div>
        <TimeFont>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </TimeFont>
      </div>
    </div>
  );
}

export default Timer;
