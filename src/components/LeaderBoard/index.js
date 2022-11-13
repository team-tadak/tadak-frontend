import LeaderBoardItem from "components/LeaderBoard/LeaderBoardItem";
import { StyledLeaderBoard } from "components/LeaderBoard/styles";
import React from "react";
import { MOCKUP_RANKS } from "mockups/ranks";
import { defaultFadeInScaleVariants, staggerQuarter } from "styles/motions";
import { TOP_DISPLAY_USER } from "constants/ranks";
import useRanks from "hooks/useRanks";
import Spinner from "components/common/Spinner";

function LeaderBoard({ ranks }) {
  //test
  // const { ranks, error } = useRanks(1, 10);
  // if (!ranks) {
  //   return (
  //     <div>
  //       <Spinner />
  //     </div>
  //   );
  // }
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
          variants={defaultFadeInScaleVariants}
          username="사용자"
          email="이메일"
          KPM="타수"
          language="언어"
          syntax="문법"
        />
        {ranks &&
          ranks.map((rank, index) => (
            <LeaderBoardItem
              rank={index + 1 + TOP_DISPLAY_USER}
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
