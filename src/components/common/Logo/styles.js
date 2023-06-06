import styled from '@emotion/styled';

export const LogoContainer = styled.img`
  width: ${({ variant }) => (variant === 'small' ? '24px' : '32px')};
  height: ${({ variant }) => (variant === 'small' ? '24px' : '32px')};
`;
