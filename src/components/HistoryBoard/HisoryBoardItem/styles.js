import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const StyledHistoryBoardItem = styled(motion.li)`
  padding: 16px;
  padding: ${({ theme, isheader }) => (isheader ? '0 16px 16px' : '16px')};
  width: 100%;
  background-color: ${({ theme, isheader }) => (isheader ? 'transparent' : theme.color.board)};

  border-radius: 10px;

  display: flex;
  align-items: center;
`;

// KPM: Keystrokes Per Minute, 타수
export const KPMText = styled.div`
  font-weight: ${({ isheader }) => (isheader ? '400' : '700')};
  font-size: ${({ isheader }) => (isheader ? '14px' : '20px')};
  color: ${(props) => props.theme.color.white};

  width: 160px;
`;

export const DateText = styled.div`
  font-weight: 400;
  font-size: ${({ isheader }) => (isheader ? '14px' : '12px')};
  color: ${(props) => props.theme.color.white};

  width: 180px;
`;
