import Breadcrumbs from "components/common/Breadcrumb";
import React from "react";
import styled from "@emotion/styled";
import { SYNTAXES } from "constants/syntaxes";
import SyntaxSelectComponent from "components/Syntax";
import UserContainer from "pages/mypage/UserContainer";
import { motion } from "framer-motion";
import { defaultFadeInUpVariants, defaultFadeInVariants, staggerQuarter } from "styles/motions";

const SyntaxSelectPageContainer = styled.div`
  padding-top: 32px;
  display: flex;
  flex-wrap: nowrap;
  gap: 1em;
`;

const SyntaxSelectContainer = styled(motion.div)`
  flex-basis: 100%;
`;

const SyntaxText = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: bold;
  padding: 24px;
  text-align: center;
`;

const SyntaxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  gap: 1em;
`;

const SyntaxItem = styled.div`
  width: 280px;
  height: 322px;
`;

function SyntaxSelect({ language }) {
  const selectedlanguage = language.replace(/^[a-z]/, (char) => char.toUpperCase());
  return (
    <>
      <SyntaxSelectPageContainer>
        <SyntaxSelectContainer
          variants={staggerQuarter}
          initial="initial"
          whileInView="animate"
          exit="exit"
        >
          <motion.div variants={defaultFadeInUpVariants}>
            <SyntaxText>어떤 문법을 연습해볼까요?</SyntaxText>
          </motion.div>
          <SyntaxContainer>
            {SYNTAXES[selectedlanguage].map((element, index) => (
              <motion.div key={index} variants={defaultFadeInUpVariants}>
                <SyntaxItem>
                  <SyntaxSelectComponent
                    language={language}
                    example={element.example}
                    title={element.title}
                    level={element.level}
                    summary={element.summary}
                  ></SyntaxSelectComponent>
                </SyntaxItem>
              </motion.div>
            ))}
          </SyntaxContainer>
        </SyntaxSelectContainer>
        <UserContainer />
      </SyntaxSelectPageContainer>
    </>
  );
}

export default SyntaxSelect;
