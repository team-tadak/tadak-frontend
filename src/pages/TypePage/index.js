import Timer from "components/Timer";
import TypeInput from "components/TypeInput";
import UserContainer from "pages/MyPage/UserContainer";
import PlayController from "pages/TypePage/PlayController";
import { TypePageAsideContainer, TypePageContainer } from "pages/TypePage/styles";
import { useState } from "react";

function TypePage() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <TypePageContainer>
      <TypeInput />
      <TypePageAsideContainer>
        <UserContainer />
        <Timer isStopped={!isPlaying} />
        <PlayController
          isPlaying={isPlaying}
          onPause={() => {
            setIsPlaying(false);
          }}
          onResume={() => {
            setIsPlaying(true);
          }}
          onStop={() => {
            setIsPlaying(false);
          }}
        />
      </TypePageAsideContainer>
    </TypePageContainer>
  );
}

export default TypePage;
