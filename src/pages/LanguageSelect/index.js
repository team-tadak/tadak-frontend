import React from "react";
import { faU, faUser } from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from "components/common/Breadcrumb";
import UserContainer from "pages/MyPage/UserContainer";

import {
  BluredLanguageCardList,
  CenterText,
  LanguageCardList,
  LanguageSelectContainer,
  LanguageSelectSection,
  LanguageSelectTitle,
  LanguageSelectUserContainer
} from "./style";
import LanguageCard from "components/LanguageCard";
import PythonIcon from "components/common/icons/languages/PythonIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HtmlIcon from "components/common/icons/languages/HtmlIcon";
import ClangIcon from "components/common/icons/languages/ClangIcon";

function LanguageSelect() {
  const pythonSummary = `입문자들을 위한 쉬운 언어 파이썬. \n코딩 초심자도 쉽게 시도 가능!`;
  const htmlSummary = `웹 개발 기본 중의 기본!\nHTML 배워서 내 블로그도 직접 만들기!`;
  const cSummary = `컴퓨터과학의 근-본!\n복잡한 문법의 C 로 진짜 실력을 측정해보세요!`;

  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <LanguageSelectSection>
        <LanguageSelectContainer>
          <LanguageCardList>
            <LanguageSelectTitle>어떤 언어로 연습해볼까요?</LanguageSelectTitle>
            <LanguageCard link="/python" LangIcon={PythonIcon} title="Python" summary={pythonSummary} />
            <LanguageCard link="/html" LangIcon={HtmlIcon} title="Html" summary={htmlSummary} />
            <LanguageCard link="/c" LangIcon={ClangIcon} title="C" summary={cSummary} />
            <BluredLanguageCardList>
              <CenterText>hey</CenterText>
              <LanguageCard link="/html" LangIcon={PythonIcon} title="Html" summary={htmlSummary} />
              <LanguageCard link="/html" LangIcon={PythonIcon} title="Html" summary={htmlSummary} />
              <LanguageCard link="/c" LangIcon={PythonIcon} title="C" summary={cSummary} />
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
