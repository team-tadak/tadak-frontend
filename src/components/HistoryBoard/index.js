import React from "react";
import { staggerQuarter, defaultFadeInScaleVariants } from "styles/motions";
import { MOCKUP_HISTORIES } from "mockups/histories";
import { StyledHistoryBoard } from "components/HistoryBoard/styles";
import HistoryBoardItem from "components/HistoryBoard/HisoryBoardItem";
import useHistories from "hooks/useHistories";

function HistoryBoard() {
  const { histories, error } = useHistories(1, 5);

  if (!histories) {
    return <p>로딩 중</p>;
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
