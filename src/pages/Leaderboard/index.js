import LeaderBoard from "components/LeaderBoard";
import {
  LeaderBoardAllRankingText,
  LeaderBoardPageContainer,
  LeaderBoardTopRankingText,
} from "pages/Leaderboard/styles";
import React from "react";
import { defaultFadeInVariants, staggerQuarter } from "styles/motions";
function Leaderboard() {
  return (
    <LeaderBoardPageContainer
      variants={staggerQuarter}
      initial="initial"
      whileInView="animate"
      exit="exit"
    >
      <LeaderBoardTopRankingText variants={defaultFadeInVariants}>
        상위 사용자
      </LeaderBoardTopRankingText>
      <LeaderBoardAllRankingText variants={defaultFadeInVariants}>
        모든 사용자
      </LeaderBoardAllRankingText>
      <LeaderBoard />;
    </LeaderBoardPageContainer>
  );
}

export default Leaderboard;
