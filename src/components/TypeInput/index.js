import Timer from "components/common/Timer";
import {
  ContentBox,
  Letter,
  TypeInputContainer,
  HiddenInput,
} from "components/TypeInput/styles";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { Paragraph } from "./styles";

const MOCKUP_STRING =
  "Authors often misinterpret the lettuce as a folklore rabbi, when in actuality it feels more like an uncursed bacon. Pursued d";

function generateLetterStatus(currentInputString, letter, currentLetterIndex) {
  return currentInputString.length - 1 < currentLetterIndex
    ? "untyped" // 아직 입력하지 않은 글자
    : currentInputString[currentLetterIndex] === letter
    ? "correct" // 입력을 했고, 맞는 글자
    : "wrong"; // 입력은 했으나, 틀린 글자
}

function TypeInput() {
  // 타이머 관련
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  const [currentInputString, setCurrentInputString] = useState("");
  const hiddenInputRef = useRef();

  // 글자 부분을 클릭하면 자동으로 hidden Input 을 focusing 하게 하고,
  // state 도 업데이트 하게 변경
  function handleContentBoxClick() {
    hiddenInputRef.current.focus();
    // setCurrentInputString(hiddenInputRef.current.value);
  }

  const keyPress = useCallback(
    (e) => {
      // if Backspace < 이거 windows 대응 이슈 있을수도??
      if (e.keyCode === 8) {
        setCurrentInputString(currentInputString.slice(0, -1));
      }
      // 나머지 모든 키들에 대해서는
      else {
        // 눌러진 키가 한 글자인지 점검하는 건 Control, Alt, Shift, Backsapce 등
        // 이런 실제 값이 아닌 조작용 키들이 바로 input 으로 먹어버리는 걸 검증하기 위함.
        if (e.key.length === 1) {
          setCurrentInputString(currentInputString + e.key);
        }
        // console.log(e.key, "||", e.keyCode);
      }
    },
    [currentInputString]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <TypeInputContainer>
      <ContentBox onClick={handleContentBoxClick}>
        <HiddenInput onChange={handleContentBoxClick} ref={hiddenInputRef} />
        <Paragraph>
          {MOCKUP_STRING.split("").map((letter, index) => (
            <Letter
              status={generateLetterStatus(currentInputString, letter, index)}
              key={index}
            >
              {letter}
            </Letter>
          ))}
        </Paragraph>
      </ContentBox>
      <Timer
        minutes={minutes}
        setMinutes={setMinutes}
        seconds={seconds}
        setSeconds={setSeconds}
      />
      <p>
        타자속도: {/* TODO: currentInputString.length 에서 mistakes 빼기 */}
        {Math.round((currentInputString.length / (60 - seconds)) * 60)}
      </p>
    </TypeInputContainer>
  );
}

export default TypeInput;
