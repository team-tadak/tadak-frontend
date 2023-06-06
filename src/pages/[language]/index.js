import Breadcrumbs from 'components/common/Breadcrumb';
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { SYNTAXES } from 'constants/syntaxes';
import SyntaxSelectComponent from 'components/Syntax';
import UserContainer from 'pages/mypage/UserContainer';
import { motion } from 'framer-motion';
import { defaultFadeInUpVariants, defaultFadeInVariants, staggerQuarter } from 'styles/motions';
import { useRouter } from 'next/router';

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

function SyntaxSelect() {
  const { query } = useRouter();
  const language = query.language;
  console.log(language);

  const [selectedLangauge, setSelectedLanguage] = useState(null);

  useEffect(() => {
    if (!query.language) return console.log('returned');
    console.log(query);
    const language = query.language;
    console.log(language);

    setSelectedLanguage(language?.replace(/^[a-z]/, (char) => char.toUpperCase()));
    console.log('set langauged');
  }, [query, setSelectedLanguage]);

  console.log(selectedLangauge);
  console.log(SYNTAXES[selectedLangauge]);

  const syntaxList = SYNTAXES[selectedLangauge];
  console.log('syntaxList', syntaxList);
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
            {syntaxList?.map((element, index) => {
              console.log(element);
              return (
                <motion.div
                  key={index}
                  variants={defaultFadeInUpVariants}
                  initial="initial"
                  whileInView="animate"
                >
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
              );
            })}
          </SyntaxContainer>
        </SyntaxSelectContainer>
        <UserContainer />
      </SyntaxSelectPageContainer>
    </>
  );
}

export default SyntaxSelect;
