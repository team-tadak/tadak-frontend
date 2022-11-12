import Breadcrumbs from "components/common/Breadcrumb";
import React from "react";
import styled from "@emotion/styled";

const SyntaxSelectPageContainer = styled.div`
  padding-top: 32px;
  display: flex;
  flex-wrap: nowrap;
  background-color: pink;
`;

const SyntaxSelectContainer = styled.div`
  flex-basis: 100%;
  background-color: blue;
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
  background-color: red;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  gap: 1em;
`;

const SyntaxItem = styled.div`
  width: 280px;
  height: 322px;
  background-color: green;
`;

const UserProfileContainer = styled.div`
  flex-basis: 256px;
  height: 684px;
  background-color: orange;
`;

function SyntaxSelect({ language }) {
  return (
    <>
      <Breadcrumbs />
      <SyntaxSelectPageContainer>
        <SyntaxSelectContainer>
          <SyntaxText>어떤 문법을 연습해볼까요?</SyntaxText>
          <SyntaxContainer>
            <SyntaxItem>1</SyntaxItem>
            <SyntaxItem>2</SyntaxItem>
            <SyntaxItem>3</SyntaxItem>
            <SyntaxItem>4</SyntaxItem>
            <SyntaxItem>5</SyntaxItem>
            <SyntaxItem>6</SyntaxItem>
          </SyntaxContainer>
        </SyntaxSelectContainer>
        <UserProfileContainer />
      </SyntaxSelectPageContainer>
    </>
  );
}

export default SyntaxSelect;
