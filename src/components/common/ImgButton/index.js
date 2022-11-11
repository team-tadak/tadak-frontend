import React from 'react';
import styled from "@emotion/styled";


const StyledImgButton = styled.button`
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

  background: #26262D;
  border-radius: 10px;

  cursor: pointer;
`

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
`

const StrContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 6px;

  width: 167px;
  height: 53px;

  flex: none;
  order: 1;
  flex-grow: 0;
`

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
`

const Title = styled.div`
  width: 55px;
  height: 19px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  letter-spacing: 0.15px;
  color: #FFFFFF;

  flex: none;
  order: 0;
  flex-grow: 0;
`

const Explanation = styled.div`
  width: 190px;
  height: 28px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15px;

  text-align: left;
  color: #FFFFFF;

  flex: none;
  order: 1;
  flex-grow: 0;
`
const LangIcon = styled.div`
  width: 64px;
  height: 64px;

  border-radius: 32px;

  flex: none;
  order: 0;
  flex-grow: 0;
`

const Arrow = styled.div`
  width: 24px;
  height: 24px;

  flex: none;
  order: 1;
  flex-grow: 0;
`

const ArrowIcon = styled.div`

  box-sizing: border-box;

  position: absolute;
  left: 62.5%;
  right: 12.5%;
  top: 25%;
  bottom: 25%;

  border: 2px solid #FFFFFF;
  transform: matrix(-1, 0, 0, 1, 0, 0);

`

function ImgButton(props) {
  return (
    <StyledImgButton>
      <InnerContainer>
        <LangIcon>
          /* Python Icon */
        </LangIcon>
        <StrContainer>
          <TitleContainer>
            <Title>
              {props.title}
            </Title>
          </TitleContainer>
          <Explanation>
            {props.explanation}
          </Explanation>
        </StrContainer>
      </InnerContainer>
      <Arrow>
        <ArrowIcon>
          /* Arrow Icon */
        </ArrowIcon>
      </Arrow>
    </StyledImgButton>
  );
}

export default ImgButton;