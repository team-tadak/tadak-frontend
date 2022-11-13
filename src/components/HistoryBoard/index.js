import React from "react";
import { staggerQuarter, defaultFadeInScaleVariants } from "styles/motions";
import { MOCKUP_HISTORIES } from "mockups/histories";
import { SpinnerContainer, StyledHistoryBoard } from "components/HistoryBoard/styles";
import HistoryBoardItem from "components/HistoryBoard/HisoryBoardItem";
import useHistories from "hooks/useHistories";
import Spinner from "components/common/Spinner";

function HistoryBoard() {
  const { histories, error } = useHistories(1, 5);

  if (error) {
    return <p>기록을 이용하려면 로그인 해 주세요 </p>;
  }

  if (!histories) {
    return (
      <SpinnerContainer>
        <div>
          <Spinner />
        </div>
      </SpinnerContainer>
    );
  }
  return (
    <>
      {console.log(histories, error)}
      <StyledHistoryBoard
        variants={staggerQuarter}
        initial="initial"
        whileInView="animate"
        exit="exit"
      >
        <HistoryBoardItem
          type="header"
          variants={defaultFadeInScaleVariants}
          date="일시"
          KPM="타수"
          language="언어"
          syntax="문법"
        />
        {histories &&
          histories.map((history, index) => (
            <HistoryBoardItem
              variants={defaultFadeInScaleVariants}
              date={new Date(history.created_at)}
              KPM={history.record}
              language={history.language_no}
              syntax={history.grammar_no}
              key={index}
            />
          ))}
      </StyledHistoryBoard>
    </>
  );
}

export default HistoryBoard;
