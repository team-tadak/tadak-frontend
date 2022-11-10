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
import Typography from "components/common/Typography";
function Leaderboard() {
  return (
    <LeaderBoardPageContainer
      variants={staggerQuarter}
      initial="initial"
      whileInView="animate"
      exit="exit"
    >
      <Typography variants={defaultFadeInVariants}>상위 사용자</Typography>
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
      <Typography type="subHeading" variants={defaultFadeInVariants}>
        모든 사용자
      </Typography>
      <LeaderBoard />
    </LeaderBoardPageContainer>
  );
}

export default Leaderboard;
