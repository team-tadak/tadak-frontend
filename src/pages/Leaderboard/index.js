import LeaderBoard from "components/LeaderBoard";
import LeaderBoardTopItem from "components/LeaderBoard/LeaderBoardTopItem";
import {
  LeaderBoardPageContainer,
  LeaderBoardPageContentContainer,
  LeaderBoardTopRankingContainer,
  PaginationContainer,
} from "pages/Leaderboard/styles";
import React, { useState, useEffect } from "react";
import { defaultFadeInVariants, staggerHalf, staggerQuarter } from "styles/motions";
import { motion } from "framer-motion";
import { MOCKUP_RANKS } from "mockups/ranks";
import Typography from "components/common/Typography";
import UserContainer from "pages/MyPage/UserContainer";
import useRanks from "hooks/useRanks";
import Spinner from "components/common/Spinner";
import DropdownComponent from "components/Dropdown";
import { mutate } from "swr";
import Pagination from "@mui/material/Pagination";

function Leaderboard() {
  const [languageNo, setLanguageNo] = useState(1);
  const [languageText, setLanguageText] = useState(null);
  const [grammarNo, setgrammarNo] = useState(1);
  const [grammarText, setGrammarText] = useState(null);
  const { ranks, error } = useRanks(1, 10, languageNo, grammarNo);
  const LanguageList = ["PYTHON", "HTML", "C"];
  const [language, setSelected] = useState(undefined);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (languageText === "PYTHON") {
      setLanguageNo(1);
    } else if (languageText === "HTML") {
      setLanguageNo(2);
    } else if (languageText === "C") {
      setLanguageNo(3);
    }
  }, [languageText]);

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
                {ranks[1] && (
                  <LeaderBoardTopItem
                    variants={defaultFadeInVariants}
                    username={ranks[1].user.username}
                    email={ranks[1].user.email}
                    KPM={ranks[1].record}
                    language={ranks[1].language_no}
                    syntax={ranks[1].grammar_no}
                    ranking="second"
                  />
                )}
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
                // setLanguageNo(3);
                console.log("good");
              }}
              setItem={setLanguageText}
            />
            {ranks.slice(2).length !== 0 && (
              <>
                <LeaderBoard ranks={ranks.slice(2)}></LeaderBoard>
                <PaginationContainer>
                  <Pagination count={10}></Pagination>
                </PaginationContainer>
              </>
            )}
          </LeaderBoardPageContentContainer>
          <UserContainer />
        </LeaderBoardPageContainer>
      )}
    </>
  );
}

export default Leaderboard;
