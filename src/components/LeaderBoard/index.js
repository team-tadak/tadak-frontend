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
