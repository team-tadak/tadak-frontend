import React from "react";
import styled from "@emotion/styled/macro";
import RightIcon from "components/common/icons/RightIcon";
import PythonIcon from "components/common/icons/PythonIcon";
import { Link } from "react-router-dom";

const StyledImgButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 12px;
  gap: 16px;

  position: absolute;
  width: 360px;
  height: 84px;

  left: 100px;
  top: 906px;

  background: #26262d;
  border-radius: 10px;

  cursor: pointer;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 247px;
  height: 64px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const StrContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 6px;

  width: 90%;
  height: 53px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 55px;
  height: 19px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Title = styled.div`
  width: 55px;
  height: 19px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  letter-spacing: 0.15px;
  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Explanation = styled.div`
  width: 90%;
  height: 28px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15px;

  text-align: left;
  color: #ffffff;

  flex: none;
  order: 1;
  flex-grow: 0;
`;
const LangIcon = styled.div`
  width: 64px;
  height: 64px;

  border-radius: 32px;
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconBorder = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 64px;
  height: 64px;
  left: 12px;
  top: 10px;

  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  box-shadow: 0px 4px 40px rgba(9, 9, 12, 0.1);
  border-radius: 10px;
`

const Arrow = styled.div`
  width: 24px;
  height: 24px;

  right: 0px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ArrowIcon = styled.div`
  box-sizing: border-box;

  position: absolute;

  
  display: flex;
  align-items: center;
  justify-content: center;

  /* border: 2px solid #ffffff; */
  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
`;

function ImgButton(props) {
  return (
    <Link to = "/python">
      <StyledImgButton>
        <InnerContainer>
          <IconBorder></IconBorder>
          <LangIcon> <PythonIcon /> </LangIcon>
          <StrContainer>
            <TitleContainer>
              <Title>{props.title}</Title>
            </TitleContainer>
            <Explanation>{props.explanation}</Explanation>
          </StrContainer>
        </InnerContainer>
        <Arrow>
          <ArrowIcon> <RightIcon /> </ArrowIcon>
        </Arrow>
      </StyledImgButton>
    </Link>
  );
}

export default ImgButton;
