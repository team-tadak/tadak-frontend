import Timer from "components/common/Timer";
import {
  ContentBox,
  Letter,
  TypeInputContainer,
  HiddenInput,
} from "components/TypeInput/styles";
import React, { useRef, useState } from "react";
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
    setCurrentInputString(hiddenInputRef.current.value);
  }

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
