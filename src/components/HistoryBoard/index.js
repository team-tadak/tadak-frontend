import React from "react";
import { staggerQuarter, defaultFadeInScaleVariants } from "styles/motions";
import { MOCKUP_HISTORIES } from "mockups/histories";
import { StyledHistoryBoard } from "components/HistoryBoard/styles";
import HistoryBoardItem from "components/HistoryBoard/HisoryBoardItem";

function HistoryBoard() {
  return (
    <>
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
        {MOCKUP_HISTORIES.histories.map((history, index) => (
          <HistoryBoardItem
            variants={defaultFadeInScaleVariants}
            date={new Date(history.createdAt)}
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
