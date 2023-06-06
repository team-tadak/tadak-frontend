import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { BadgeIconContainer } from 'components/common/Badge/styles';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  gap: 16px;

  background: #26262d;
  border-radius: 10px;
`;

export const IconContainer = styled(BadgeIconContainer)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.color.white};
  border-radius: 10px;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  flex: none;
  order: 0;
  /* flex-grow: 0; */
  flex-shrink: 0;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
`;

export const Summary = styled.div`
  white-space: pre;
  width: 200px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  color: ${theme.color.white};
`;
