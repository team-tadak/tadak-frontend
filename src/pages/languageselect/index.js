import React from 'react';
import { faU, faUser } from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from 'components/common/Breadcrumb';
import UserContainer from 'pages/mypage/UserContainer';

import {
  BluredLanguageCardList,
  LanguageCardList,
  LanguageSelectContainer,
  LanguageSelectSection,
  LanguageSelectTitle,
  LanguageSelectUserContainer,
} from './style';
import LanguageCard from 'components/LanguageCard';
import PythonIcon from 'components/common/icons/languages/PythonIcon';
import HtmlIcon from 'components/common/icons/languages/HtmlIcon';
import ClangIcon from 'components/common/icons/languages/ClangIcon';
import { defaultFadeInUpVariants, staggerQuarter } from 'styles/motions';
import { motion } from 'framer-motion';

function LanguageSelect() {
  const ITEMS = [
    {
      title: 'Python',
      icon: PythonIcon,
      link: '/python',
      summary: `입문자들을 위한 쉬운 언어 파이썬. \n코딩 초심자도 쉽게 시도 가능!`,
    },
    {
      title: 'C',
      icon: ClangIcon,
      link: '/c',
      summary: `입문자들을 위한 쉬운 언어 파이썬. \n코딩 초심자도 쉽게 시도 가능!`,
    },
    {
      title: 'Html',
      icon: HtmlIcon,
      link: '/html',
      summary: `웹 개발 기본 중의 기본!\nHTML 배워서 내 블로그도 직접 만들기!`,
    },
  ];

  return (
    <>
      <LanguageSelectSection>
        <LanguageSelectContainer>
          <LanguageCardList
            variants={staggerQuarter}
            initial="initial"
            whileInView="animate"
            exit="exit"
          >
            <motion.div variants={defaultFadeInUpVariants}>
              <LanguageSelectTitle>어떤 언어로 연습해볼까요?</LanguageSelectTitle>
            </motion.div>
            {ITEMS.map((item, index) => (
              <motion.div key={index} variants={defaultFadeInUpVariants}>
                <LanguageCard
                  link={item.link}
                  LangIcon={item.icon}
                  title={item.title}
                  summary={item.summary}
                />
              </motion.div>
            ))}
            <BluredLanguageCardList variants={defaultFadeInUpVariants}>
              <LanguageCard
                link="/html"
                LangIcon={PythonIcon}
                title="Html"
                summary={ITEMS[0].summary}
              />
              <LanguageCard
                link="/html"
                LangIcon={PythonIcon}
                title="Html"
                summary={ITEMS[0].summary}
              />
              <LanguageCard link="/c" LangIcon={PythonIcon} title="C" summary={ITEMS[0].summary} />
            </BluredLanguageCardList>
          </LanguageCardList>
        </LanguageSelectContainer>

        <LanguageSelectUserContainer>
          <UserContainer></UserContainer>
        </LanguageSelectUserContainer>
      </LanguageSelectSection>
    </>
  );
}

export default LanguageSelect;
