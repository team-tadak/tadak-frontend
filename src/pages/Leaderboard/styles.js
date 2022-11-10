import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const LeaderBoardPageContainer = styled(motion.main)`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
`;
export const LeaderBoardTopRankingText = styled(motion.div)`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
`;
export const LeaderBoardAllRankingText = styled(motion.div)`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
`;

export const LeaderBoardTopRankingContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  column-gap: 20px;
`;
