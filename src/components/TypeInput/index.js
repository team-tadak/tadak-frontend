import {
  ContentBox,
  Letter,
  TypeInputContainer,
} from "components/TypeInput/styles";
import React from "react";
import { Paragraph } from "./styles";

const MOCKUP_STRING =
  "Authors often misinterpret the lettuce as a folklore rabbi, when in actuality it feels more like an uncursed bacon. Pursued d";

function TypeInput() {
  return (
    <TypeInputContainer>
      <ContentBox>
        <Paragraph>
          {MOCKUP_STRING.split("").map((letter) => (
            <Letter>{letter}</Letter>
          ))}
        </Paragraph>
      </ContentBox>
    </TypeInputContainer>
  );
}

export default TypeInput;
