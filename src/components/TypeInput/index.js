import {
  ContentBox,
  Letter,
  TypeInputContainer,
  HiddenInput,
} from "components/TypeInput/styles";
import React, { useRef } from "react";
import { Paragraph } from "./styles";

const MOCKUP_STRING =
  "Authors often misinterpret the lettuce as a folklore rabbi, when in actuality it feels more like an uncursed bacon. Pursued d";

function TypeInput() {
  // const [currentInputString, setCurrentInputString] = useState("");
  const hiddenInputRef = useRef();

  function handleContentBoxClick() {
    hiddenInputRef.current.focus();
    console.log(hiddenInputRef.current.value);
  }

  return (
    <TypeInputContainer>
      <ContentBox onClick={handleContentBoxClick}>
        <HiddenInput onChange={handleContentBoxClick} ref={hiddenInputRef} />
        <Paragraph>
          {MOCKUP_STRING.split("").map((letter, index) => (
            <Letter key={index}>{letter}</Letter>
          ))}
        </Paragraph>
      </ContentBox>
    </TypeInputContainer>
  );
}

export default TypeInput;
