import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Button from "./Button";
import ResultContainer from "./ResultContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  //justify-content: center;
  //align-items: flex-start;
  padding: 24px;
  gap: 8px;
  width: 300px;
  height: 700px;
  left: 1373px;
  top: 192px;
  background: #161b21;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 0px 24px;
  gap: 16px;
  width: 210px;
  height: 158px;
`;

const UserPicture = styled.div`
  width: 64px;
  height: 64px;

  background-image: url(${process.env.PUBLIC_URL + "/img/emoji.png"});
  border: 1px dashed #ffffff;
  border-radius: 32px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 210px;
  height: 54px;
`;

const UserFont = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;

const EmailFont = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #6f7680;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
`;

function UserContainer({ currentKPM }) {
  return (
    <Container>
      <UserInfoContainer>
        <UserPicture />
        <UserInfo>
          <UserFont>홍길동</UserFont>
          <EmailFont>hongkildong@hongkildong.com</EmailFont>
        </UserInfo>
      </UserInfoContainer>
      <ResultContainer
        title={"기록"}
        icon="1"
        record={currentKPM ? `${currentKPM} 타` : "000 타"}
      />
      <ResultContainer title={"랭킹"} icon="2" record={"233위"} />
      <ButtonContainer>
        <Link to="/languageselect">
          <Button icon="1" content={"언어선택"} />
        </Link>
        <Link to="/syntaxselect">
          <Button icon="2" content={"문법선택"} />
        </Link>
        <Link to="/leaderboard">
          <Button icon="3" content={"랭킹보드"} />
        </Link>
        <Link to="/leaderboard">
          <Button icon="4" content={"로그아웃"} />
        </Link>
      </ButtonContainer>
    </Container>
  );
}

export default UserContainer;
