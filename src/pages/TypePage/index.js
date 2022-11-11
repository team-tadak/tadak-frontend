import Timer from "components/Timer";
import TypeInput from "components/TypeInput";
import UserContainer from "pages/MyPage/UserContainer";
import PlayController from "pages/TypePage/PlayController";
import { TypePageAsideContainer, TypePageContainer } from "pages/TypePage/styles";
import { useState } from "react";

function TypePage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [timePassed, setTimePassed] = useState(0);
  const [currentKPM, setCurrentKPM] = useState(null);

  return (
    <TypePageContainer>
      <TypeInput timePassed={Math.floor(timePassed / 1000)} setCurrentKPM={setCurrentKPM} />
      <TypePageAsideContainer>
        <UserContainer currentKPM={currentKPM} />
        <Timer isStopped={!isPlaying} setTimePassed={setTimePassed} />
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
