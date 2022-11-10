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
import { MOCKUP_RANKS } from "mockups/ranks";
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
          <LeaderBoardTopItem
            variants={defaultFadeInVariants}
            username={MOCKUP_RANKS.ranks[0].user.username}
            email={MOCKUP_RANKS.ranks[0].user.email}
            KPM={MOCKUP_RANKS.ranks[0].record}
            language={MOCKUP_RANKS.ranks[0].language_no}
            syntax={MOCKUP_RANKS.ranks[0].grammar_no}
            ranking="first"
          />
          <LeaderBoardTopItem
            variants={defaultFadeInVariants}
            username={MOCKUP_RANKS.ranks[1].user.username}
            email={MOCKUP_RANKS.ranks[1].user.email}
            KPM={MOCKUP_RANKS.ranks[1].record}
            language={MOCKUP_RANKS.ranks[1].language_no}
            syntax={MOCKUP_RANKS.ranks[1].grammar_no}
            ranking="second"
          />
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
