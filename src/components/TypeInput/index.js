import Timer from "components/common/Timer";
import {
  ContentBox,
  Letter,
  TypeInputContainer,
} from "components/TypeInput/styles";
import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Paragraph } from "components/TypeInput/styles";
import { MOCKUP_STRING } from "constants/paragraphs";

function generateLetterStatus(currentInputString, letter, currentLetterIndex) {
  return currentInputString.length - 1 < currentLetterIndex
    ? "untyped" // 아직 입력하지 않은 글자
    : currentInputString[currentLetterIndex] === letter
    ? "correct" // 입력을 했고, 맞는 글자
    : "wrong"; // 입력은 했으나, 틀린 글자
}

// paragraph 받아서 \n (newline) 의 index 위치를 반환해줌
function parseNewline(paragraph) {
  let newLineIndices = [];
  for (var i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === "\n") {
      newLineIndices.push(i);
    }
  }
  console.log("new line indices", newLineIndices);
  return newLineIndices;
}

function TypeInput() {
  // 타이머 관련
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  // 현재 입력받은 글자를 state 로 관리
  const [currentInputString, setCurrentInputString] = useState("");

  // 현재 오탈자 수를 state 로 관리
  const [mistakes, setMistakes] = useState(0);

  // 줄이 바뀌는 index 따로 관리
  const breakpoints = useMemo(() => parseNewline(MOCKUP_STRING), []);
  const EOLFlag = useRef(false);

  // 줄 끝에서는 엔터를 쳐야지만 줄이 넘어가도록
  const enterPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        EOLFlag.current = false;
        setCurrentInputString(currentInputString + " ");
      }
    },
    [currentInputString]
  );

  const keyPress = useCallback(
    (e) => {
      // 직접 각 분기문에서 setState 사용 시 비동기(async) 로 처리되는
      // setState 때문에 오탈자 수를 정확히 셀 수가 없음.
      let tempInputString = currentInputString;
      // if Backspace < 이거 windows 대응 이슈 있을수도??

      if (e.keyCode === 8) {
        // 틀린 글자를 지우는 경우 mistakes 감소시키기
        if (tempInputString.length === 0) {
          // 한 글자도 안 남은 경우 (mistakes 가 음수 되는 것 대응)
          setMistakes(0);
        } else if (
          tempInputString.slice(-1) !==
          MOCKUP_STRING.charAt(tempInputString.length - 1)
        ) {
          setMistakes(mistakes - 1);
        }
        tempInputString = tempInputString.slice(0, -1);
      }
      // 나머지 모든 키들에 대해서는
      else {
        // 눌러진 키가 한 글자인지 점검하는 건 Control, Alt, Shift, Backsapce 등
        // 이런 실제 값이 아닌 조작용 키들이 바로 input 으로 먹어버리는 걸 검증하기 위함.
        if (e.key.length === 1) {
          tempInputString = tempInputString + e.key;
          // 마지막으로 들어온 글자와 비교기준 글자가 다를 경우, mistakes 증가시키기
          if (
            tempInputString.slice(-1) !==
            MOCKUP_STRING.charAt(tempInputString.length - 1)
          ) {
            setMistakes(mistakes + 1);
          }
        }
        // console.log(e.key, "||", e.keyCode);
      }
      setCurrentInputString(tempInputString);
      if (tempInputString.length === MOCKUP_STRING.length) {
        alert(
          `현재 타수 ${Math.round(
            ((currentInputString.length - mistakes) / (60 - seconds)) * 60
          )}, 오탈자: ${mistakes} 개`
        );
      }
      // 만약 line 끝에 도달했다면
      if (breakpoints.includes(tempInputString.length)) {
        console.log("EOL");
        EOLFlag.current = true;
        document.addEventListener("keydown", enterPress);
      }
    },
    [breakpoints, currentInputString, enterPress, mistakes, seconds]
  );

  // 전체 문서에 대해 keydown event bind 시키기
  // TODO: 이거를 input 에만 bind 시켜야 할 거같은데?
  useEffect(() => {
    if (!EOLFlag.current) {
      document.addEventListener("keydown", keyPress);
    }
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  useEffect(() => {
    // 만약 line 끝에 도달했다면
    if (breakpoints.includes(currentInputString.length)) {
      console.log("EOL");
      EOLFlag.current = true;
      document.addEventListener("keydown", enterPress);
    }
  }, [breakpoints, currentInputString, enterPress]);

  return (
    <TypeInputContainer>
      <ContentBox>
        <Paragraph>
          {MOCKUP_STRING.split("").map((letter, index) =>
            letter === "\n" ? (
              <br key={index} />
            ) : (
              <Letter
                status={generateLetterStatus(currentInputString, letter, index)}
                key={index}
              >
                {letter}
              </Letter>
            )
          )}
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
        {Math.round(
          ((currentInputString.length - mistakes) / (60 - seconds)) * 60
        )}
      </p>
      <p>
        실수:
        {mistakes}
      </p>
    </TypeInputContainer>
  );
}

export default TypeInput;
