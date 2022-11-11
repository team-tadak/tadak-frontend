/** @jsxImportSource @emotion/react */
import Button from "components/common/Button";
import ImgButton from "components/common/ImgButton";
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

function Main() {
  return (
    <>
    <Button onClick={console.log('Hi')}>시작하기!  -{'>'}</Button>

    <ImgButton title="Python" explanation="입문자들을 위한 쉬운 언어 파이썬. 코딩 초심자도 쉽게 시도 가능!"> </ImgButton>

    <MainPageContainer>
      <MainPageContentSection
        variants={staggerOne}
        initial="initial"
        whileInView="animate"
        exit="exit"
      >
        <Title variants={defaultFadeInUpVariants}>탁. 타닥. 탁탁</Title>
        <SubTitle variants={defaultFadeInUpVariants}>코딩하는 경쾌한 소리</SubTitle>
        <SubTitle variants={defaultFadeInUpVariants}>나는 얼마나 빨리 코딩할 수 있을까요?</SubTitle>
      </MainPageContentSection>

      <MainPageImageSection
        variants={staggerOne}
        initial="initial"
        whileInView="animate"
        exit="exit"
      >
        <MainPageImage variants={defaultFadeInUpVariants}></MainPageImage>
      </MainPageImageSection>
    </MainPageContainer>
    </>
  );
}

export default Main;
