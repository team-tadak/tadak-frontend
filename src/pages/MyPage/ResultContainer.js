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
`;

const TitleFont = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

const RecordFont = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

const IconPositioner = styled.div`
  width: 15px;
  height: 15px;
  color: #ffffff;
`;

function ResultContainer({ title, icon, record }) {
  return (
    <RecordShape>
      <TitleFont>{title}</TitleFont>
      <IconPositioner>
        {icon === "1" && <img src={Code} width="30" />}
        {icon === "2" && <img src={Trophy} width="30" />}
      </IconPositioner>
      <RecordFont>{record}</RecordFont>
    </RecordShape>
  );
}

export default ResultContainer;
