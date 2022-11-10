/** @jsxImportSource @emotion/react */
import {
  MainPageContainer,
  MainPageContentSection,
  MainPageImage,
  MainPageImageSection,
  SubTitle,
  Title,
} from "pages/Main/styles";
import React from "react";
import { defaultFadeInUpVariants, staggerOne } from "styles/motions";
import { motion } from "framer-motion";

function Main() {
  return (
    <MainPageContainer>
      <MainPageContentSection>
        <motion.div variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
          <Title variants={defaultFadeInUpVariants}>탁. 타닥. 탁탁</Title>
          <SubTitle variants={defaultFadeInUpVariants}>코딩하는 경쾌한 소리</SubTitle>
          <SubTitle variants={defaultFadeInUpVariants}>
            나는 얼마나 빨리 코딩할 수 있을까요?
          </SubTitle>
        </motion.div>
      </MainPageContentSection>
      <MainPageImageSection>
        <motion.div variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
          <MainPageImage variants={defaultFadeInUpVariants}></MainPageImage>
        </motion.div>
      </MainPageImageSection>
    </MainPageContainer>
  );
}

export default Main;
