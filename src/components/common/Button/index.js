import React from 'react';
import styled from "@emotion/styled";
import RightArrowIcon from "components/common/icons/RightArrowIcon";

const TextWritten = styled.div`
  height: 19px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #0E1118;

  flex: none;
  order: 0;
  flex-grow: 0;
`
const Arrow = styled.div`
  flex: none;
  order: 1;
  flex-grow: 0;
`

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 12px 16px 16px;
  column-gap: 7px;

  // position: absolute;
  width: 129px;
  height: 56px;

  background: #FFFFFF;
  border-radius: 10px;
  cursor:pointer;

`;

function Button(props) {
  return <StyledButton{...props}>
    <TextWritten> {props.children} </TextWritten>
    <Arrow> <RightArrowIcon/></Arrow>
  </StyledButton>
}

export default Button;