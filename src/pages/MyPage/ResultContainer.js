import React from "react";
import styled from "@emotion/styled";
import Code from "./img/Code.png";
import Trophy from "./img/Trophy.png";
import UserContainer from "./UserContainer";

const RecordShape = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
  background-color: transparent; // 임시로 배포 위해 transparent 로 설정했습니다. 다시 임의의 색상으로 바꾸셔도 됩니다!
`;

const TitleFont = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;
  color: #ffffff;
  font-weight: bold;
`;

const RecordFont = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 19px;
  color: #ffffff;
`;

function ResultContainer({ title, icon, record }) {
  return (
    <RecordShape>
      {icon === "1" && <img src={Code} width="50" height="50" />}
      {icon === "2" && <img src={Trophy} width="50" height="50" />}
      <TitleFont>{title}</TitleFont>
      <RecordFont>{record}</RecordFont>
    </RecordShape>
  );
}

export default ResultContainer;
