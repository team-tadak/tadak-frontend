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
  &.active {
    background-color: lightblue;
  }
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
      {icon === "1" && <img src={Rectangle} width="15" height="15" />}
      {icon === "2" && <img src={Switch} width="20" height="20" />}
      {icon === "3" && <img src={Trophy} width="20" height="20" />}
      {icon === "4" && <img src={SignIn} width="20" height="20" />}

      <ButtonFont>{content}</ButtonFont>
    </ButtonShape>
  );
}

export default Button;
