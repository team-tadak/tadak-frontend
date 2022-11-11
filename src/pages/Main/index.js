/** @jsxImportSource @emotion/react */
import Button from "components/common/Button";
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
import { css } from "@emotion/react";

function Main() {
  return (
    <>
      <MainPageContainer>
        <MainPageContentSection
          variants={staggerOne}
          initial="initial"
          whileInView="animate"
          exit="exit"
        >
          <Title variants={defaultFadeInUpVariants}>탁. 타닥. 탁탁</Title>
          <SubTitle variants={defaultFadeInUpVariants}>코딩하는 경쾌한 소리</SubTitle>
          <SubTitle variants={defaultFadeInUpVariants}>
            나는 얼마나 빨리 코딩할 수 있을까요?
          </SubTitle>
          <Button
            css={css`
              margin-top: 114px;
            `}
            onClick={console.log("Hi")}
          >
            시작하기! -{">"}
          </Button>
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
