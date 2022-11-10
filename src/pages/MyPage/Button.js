import React from "react";
import styled from "@emotion/styled";
import Rectangle from "./img/Rectangle.png";
import SignIn from "./img/SignIn.png";
import Switch from "./img/Switch.png";
import Trophy from "./img/Trophy.png";

const ButtonShape = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 200px;
  height: 60px;
`;

const ButtonFont = styled.div`
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

function Button({ icon, content }) {
  return (
    <ButtonShape>
      <IconPositioner>
        {icon === "1" && <Rectangle size="30" />}
        {icon === "2" && <Switch size="30" />}
        {icon === "3" && <Trophy size="30" />}
        {icon === "4" && <SignIn size="30" />}
      </IconPositioner>
      <ButtonFont>{content}</ButtonFont>
    </ButtonShape>
  );
}

export default Button;
