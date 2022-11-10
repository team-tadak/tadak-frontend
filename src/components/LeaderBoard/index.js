import LeaderBoardItem from "components/LeaderBoard/LeaderBoardItem";
import { StyledLeaderBoard } from "components/LeaderBoard/styles";
import React from "react";
import { MOCKUP_RANKS } from "mockups/ranks";
import { defaultFadeInScaleVariants, staggerQuarter } from "styles/motions";
function LeaderBoard() {
  return (
    <>
      <StyledLeaderBoard
        variants={staggerQuarter}
        initial="initial"
        whileInView="animate"
        exit="exit"
      >
        <LeaderBoardItem
          type="header"
          rank="d"
          variants={defaultFadeInScaleVariants}
          username="사용자"
          email="이메일"
          KPM="타수"
          language="언어"
          syntax="문법"
        />
        {MOCKUP_RANKS.ranks.map((rank, index) => (
          <LeaderBoardItem
            rank={index + 1}
            variants={defaultFadeInScaleVariants}
            username={rank.user.username}
            email={rank.user.email}
            KPM={rank.record}
            language={rank.language_no}
            syntax={rank.grammar_no}
            key={index}
          />
        ))}
      </StyledLeaderBoard>
    </>
  );
}

export default LeaderBoard;
