import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const StyledLeaderBoardTopItem = styled(motion.li)`
  flex: 1;
  padding: 16px;
  background: ${({ ranking }) =>
    ranking === 'first'
      ? 'linear-gradient(263.36deg, #4760fa -2.89%, #161b21 101.57%)'
      : 'linear-gradient(263.36deg, #1e2759 -2.89%, #161b21 101.57%)'};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const LeaderBoardTopItemBasicInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeaderBoardTopItemLanguageSyntaxContainer = styled.div`
  margin: 0 auto;
  display: flex;
  column-gap: 12px;
  align-items: center;
`;

// KPM: Keystrokes Per Minute, 타수
export const KPMText = styled.div`
  font-weight: 900;
  font-size: 20px;
  color: ${(props) => props.theme.color.white};
`;
