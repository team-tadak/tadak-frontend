import React from 'react';
import styled from "@emotion/styled";

function Button(props) {
  return <StyledButton{...props}>
    {props.children}
  </StyledButton>
}

const StyledButton = styled.button`
align-items: center;
padding: 16px 12px 16px 16px;
gap: 16px;

position: absolute;
width: 129px;
height: 56px;

left: ${props => props.left};
top: ${props => props.top};

background: #FFFFFF;
border-radius: 10px;

font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #0E1118;

align-items: center;
cursor: pointer;

`;

export default Button;