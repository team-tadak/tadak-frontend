/** @jsxImportSource @emotion/react */
import Timer from "components/Timer";
import TypeInput from "components/TypeInput";
import UserContainer from "pages/MyPage/UserContainer";
import PlayController from "pages/TypePage/PlayController";
import { TypePageAsideContainer, TypePageContainer } from "pages/TypePage/styles";
import { useParams } from "react-router-dom";
// import useSearchParams from "react-router-dom";
import { useState } from "react";
import Breadcrumbs from "components/common/Breadcrumb";
import { css } from "@emotion/react";

function TypePage({ language }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timePassed, setTimePassed] = useState(0);
  const [currentKPM, setCurrentKPM] = useState(null);

  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("no"));
  const { id } = useParams();

  return (
    <>
      <TypePageContainer>
        <TypeInput
          timePassed={Math.floor(timePassed / 1000)}
          setCurrentKPM={setCurrentKPM}
          currentKPM={currentKPM}
          setIsPlaying={setIsPlaying}
        />
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
      <p>
        {language} 언어 의 {id} 번 코드가 표시되어야 합니다.{" "}
      </p>
    </>
  );
}

export default TypePage;
