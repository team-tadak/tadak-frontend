import styled from '@emotion/styled';
import { resetButtonStyle } from 'styles/utils/button';

const baseDiv = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
`;

export const StyledSlimButton = styled(baseDiv)`
  ${resetButtonStyle}
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  width: 100%;
  background: ${({ theme }) => theme.color.primary500};
`;
