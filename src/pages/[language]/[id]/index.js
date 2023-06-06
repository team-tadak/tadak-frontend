/** @jsxImportSource @emotion/react */
import Timer from "components/Timer";
import TypeInput from "components/TypeInput";
import UserContainer from "pages/mypage/UserContainer";
import PlayController from "pages/typepage/PlayController";
import { TypePageAsideContainer, TypePageContainer } from "pages/typepage/styles";

import { useState } from "react";
import Breadcrumbs from "components/common/Breadcrumb";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

const LANGUAGE_CODE = {
  "python": 1,
  "c": 2,
  "html": 3,
}

function TypePage() {



  const [isPlaying, setIsPlaying] = useState(false);
  const [timePassed, setTimePassed] = useState(0);
  const [currentKPM, setCurrentKPM] = useState(null);

  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("no"));
  const { query } = useRouter();
  const id = Number(query.id)
  const language = query.language;
  const languageCode = LANGUAGE_CODE[language];
  console.log(languageCode);
  const paragraphIndex = (languageCode - 1) * 6 + (id - 1);
  console.log(paragraphIndex);
  if (!paragraphIndex) return null;
  return (
    <>
      <TypePageContainer
        css={css`
          margin-top: 32px;
        `}
      >
        <TypeInput
          paragraphIndex={paragraphIndex}
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
      {/* <p>{language} 언어 의 {id} 번 코드가 표시되어야 합니다.{" "}</p> */}
    </>
  );
}

export default TypePage;
