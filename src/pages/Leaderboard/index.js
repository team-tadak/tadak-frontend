import LeaderBoard from "components/LeaderBoard";
import LeaderBoardTopItem from "components/LeaderBoard/LeaderBoardTopItem";
import {
  LeaderBoardPageContainer,
  LeaderBoardPageContentContainer,
  LeaderBoardTopRankingContainer,
} from "pages/Leaderboard/styles";
import React, { useState } from "react";
import { defaultFadeInVariants, staggerHalf, staggerQuarter } from "styles/motions";
import { motion } from "framer-motion";
import { MOCKUP_RANKS } from "mockups/ranks";
import Typography from "components/common/Typography";
import UserContainer from "pages/MyPage/UserContainer";
import useRanks from "hooks/useRanks";
import Spinner from "components/common/Spinner";
import DropdownComponent from "components/Dropdown";
import { mutate } from "swr";
function Leaderboard() {
  const [languageNo, setLanguageNo] = useState(1);
  const [grammarNo, setgrammarNo] = useState(1);
  const { ranks, error } = useRanks(1, 2, languageNo, grammarNo);
  const LanguageList = ["PYTHON", "HTML", "C"];
  const [language, setSelected] = useState(undefined);

  console.log(error);
  if (!ranks) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  console.log(ranks);
  return (
    <>
      {ranks[0] && (
        <LeaderBoardPageContainer>
          <LeaderBoardPageContentContainer
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
                  username={ranks[0].user.username}
                  email={ranks[0].user.email}
                  KPM={ranks[0].record}
                  language={ranks[0].language_no}
                  syntax={ranks[0].grammar_no}
                  ranking="first"
                />

                {/* <LeaderBoardTopItem
                  variants={defaultFadeInVariants}
                  username={ranks[1].user.username}
                  email={ranks[1].user.email}
                  KPM={ranks[1].record}
                  language={ranks[1].language_no}
                  syntax={ranks[1].grammar_no}
                  ranking="second"
                /> */}
              </LeaderBoardTopRankingContainer>
            </motion.div>
            <Typography type="subHeading" variants={defaultFadeInVariants}>
              모든 사용자
            </Typography>
            <DropdownComponent
              list={LanguageList}
              onSelect={setSelected}
              onChange={() => {
                //mutate("/ranks?languageNo=2&pageNumber=1&pageSize=5");
                setLanguageNo(3);
                console.log("good");
              }}
            />
            <LeaderBoard />
          </LeaderBoardPageContentContainer>
          <UserContainer />
        </LeaderBoardPageContainer>
      )}
    </>
  );
}

export default Leaderboard;
