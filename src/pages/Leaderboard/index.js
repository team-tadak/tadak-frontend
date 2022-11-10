import LeaderBoard from "components/LeaderBoard";
import LeaderBoardTopItem from "components/LeaderBoard/LeaderBoardTopItem";
import {
  LeaderBoardAllRankingText,
  LeaderBoardPageContainer,
  LeaderBoardTopRankingContainer,
  LeaderBoardTopRankingText,
} from "pages/Leaderboard/styles";
import React from "react";
import { defaultFadeInVariants, staggerHalf, staggerQuarter } from "styles/motions";
import { motion } from "framer-motion";
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
      <motion.div
        variants={defaultFadeInVariants}
        initial="initial"
        whileInView="animate"
        exit="exit"
      >
        <LeaderBoardTopRankingContainer variants={staggerHalf}>
          <LeaderBoardTopItem variants={defaultFadeInVariants} ranking="first" />
          <LeaderBoardTopItem variants={defaultFadeInVariants} ranking="second" />
        </LeaderBoardTopRankingContainer>
      </motion.div>
      <LeaderBoardAllRankingText variants={defaultFadeInVariants}>
        모든 사용자
      </LeaderBoardAllRankingText>
      <LeaderBoard />
    </LeaderBoardPageContainer>
  );
}

export default Leaderboard;
