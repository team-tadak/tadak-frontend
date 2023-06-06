import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const ButtonShape = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0px;
  gap: 16px;


  height: 48px;
  border-radius: 10px;

  &.active {
    background-color: ${({ theme }) => theme.color.primary500};
    position: relative;
    padding-left: 8px;
  }

  &:hover {
    padding-left: 8px;
    color: ${({ theme, kind }) =>
    kind === 'logout' ? theme.color.warning300 : theme.color.primary200};
  }
  transition: 0.3s;
`;

const ButtonFont = styled.div`

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: inherit;

`;



function Button({ icon, content, ...props }) {
  return (
    <Link href="#" {...props}>
      <ButtonShape {...props}>
        {icon === '1' && <img src="/img/Rectangle.png" width="15" height="15" />}
        {icon === '2' && <img src="./img/Switch.png" width="20" height="20" />}
        {icon === '3' && <img src="./img/Trophy.png" width="20" height="20" />}
        {icon === '4' && <img src="./img/SignIn.png" width="20" height="20" />}

        <ButtonFont>{content}</ButtonFont>
      </ButtonShape>
    </Link>
  );
}

export default Button;
