/** @jsxImportSource @emotion/react */
import Button from "components/common/Button";
import {
  MainPageContainer,
  MainPageContentSection,
  MainPageImage,
  MainPageImageSection,
  MainPageInputContainer,
  SubTitle,
  Title,
  TitleContainer,
} from "pages/Main/styles";
import { InputContainer as InputWrapper, LabelBox } from "components/common/Inputs/styles";

import React from "react";
import { useState } from "react";
import { defaultFadeInUpVariants, staggerOne } from "styles/motions";
import { css } from "@emotion/react";
import InputUserName from "components/common/Inputs/InputUserName";
import DropdownComponent from "components/Dropdown";
import { Link } from "react-router-dom";

function Main() {
  const [gender, setSelected] = useState(undefined);
  const [nickName, setNickName] = useState(undefined);
  const genderList = ["남성", "여성", "선택 안 함"];
  function handleSubmit() {
    if (nickName === undefined || gender === undefined) {
      console.log("check nickName & gender");
      return;
    }
    console.log("nickName: " + nickName + ", gender: " + gender);
  }
  return (
    <>
      <MainPageContainer>
        <MainPageContentSection
          variants={staggerOne}
          initial="initial"
          whileInView="animate"
          exit="exit"
        >
          <TitleContainer>
            <Title variants={defaultFadeInUpVariants}>탁. 타닥. 탁탁</Title>
            <SubTitle variants={defaultFadeInUpVariants}>코딩하는 경쾌한 소리</SubTitle>
            <SubTitle variants={defaultFadeInUpVariants}>
              나는 얼마나 빨리 코딩할 수 있을까요?
            </SubTitle>
          </TitleContainer>
          <MainPageInputContainer>
            <InputUserName
              onChange={(e) => {
                setNickName(e.target.value);
              }}
              onError={() => {
                setNickName(undefined);
              }}
            ></InputUserName>
            <InputWrapper>
              <LabelBox>
                {" "}
                <wbr />{" "}
              </LabelBox>
              <DropdownComponent list={genderList} onSelect={setSelected}></DropdownComponent>
            </InputWrapper>
            <InputWrapper>
              <LabelBox>
                {" "}
                <wbr />{" "}
              </LabelBox>
              <Link to="/languageselect">
                <Button
                  css={css`
                    margin: 9px 0;
                  `}
                  onClick={handleSubmit}
                >
                  시작하기!
                </Button>
              </Link>
            </InputWrapper>
          </MainPageInputContainer>
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
