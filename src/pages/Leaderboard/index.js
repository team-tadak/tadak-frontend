import LeaderBoard from "components/LeaderBoard";
import LeaderBoardTopItem from "components/LeaderBoard/LeaderBoardTopItem";
import {
  LeaderBoardPageContainer,
  LeaderBoardPageContentContainer,
  LeaderBoardTopRankingContainer,
  PaginationContainer,
  LeaderBoardDropdwonContainer,
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
  const [languageNo, setLanguageNo] = useState(0);
  const [languageText, setLanguageText] = useState(null);
  const [grammarNo, setGrammarNo] = useState(0);
  const [grammarText, setGrammarText] = useState(null);
  const { ranks, error } = useRanks(1, 10, languageNo, grammarNo);
  const LanguageList = ["PYTHON", "HTML", "C"];
  const grammarList = [
    ["파이썬 1", "파이썬 2", "파이썬 3", "파이썬 4", "파이썬 5", "파이썬 6"],
    ["Html 1", "Html 2", "Html 3", "Html 4", "Html 5", "Html 6"],
    ["C 1", "C 2", "C 3", "C 4", "C 5", "C 6"],
  ];
  const [language, setSelected] = useState(undefined);

  /* language가 무엇인지에 따라 grammarText를 어떻게 할지... 그냥 일차원적으로 grammarText이거아님이거 ||로 이렇게 적어야 하나?*/
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

  useEffect(() => {
    if (grammarText === "파이썬 1" || grammarText === "Html 1" || grammarText === "C 1") {
      setGrammarNo(1);
    } else if (grammarText === "파이썬 2" || grammarText === "Html 2" || grammarText === "C 2") {
      setGrammarNo(2);
    } else if (grammarText === "파이썬 3" || grammarText === "Html 3" || grammarText === "C 3") {
      setGrammarNo(3);
    } else if (grammarText === "파이썬 4" || grammarText === "Html 4" || grammarText === "C 4") {
      setGrammarNo(4);
    } else if (grammarText === "파이썬 5" || grammarText === "Html 5" || grammarText === "C 5") {
      setGrammarNo(5);
    } else if (grammarText === "파이썬 6" || grammarText === "Html 6" || grammarText === "C 6") {
      setGrammarNo(6);
    }
  }, [grammarText]);

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
            <LeaderBoardDropdwonContainer>
              <DropdownComponent
                list={LanguageList}
                kind="언어 선택"
                onSelect={setSelected}
                onChange={() => {
                  //mutate("/ranks?languageNo=2&pageNumber=1&pageSize=5");
                  // setLanguageNo(3);
                  console.log("good");
                }}
                setItem={setLanguageText}
              />
              <DropdownComponent
                list={languageNo === 0 ? [] : grammarList[languageNo - 1]}
                kind="문법 선택"
                onSelect={setSelected}
                onChange={() => {
                  console.log(grammarNo);
                }}
                setItem={setGrammarText}
              />
            </LeaderBoardDropdwonContainer>

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
