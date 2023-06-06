import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const LeaderBoardPageContainer = styled(motion.main)`
  display: flex;
  justify-content: space-between;
  /* column-gap: 36px; */
  /* width: 100%; */
  margin-top: 32px;
`;
export const LeaderBoardPageContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  flex-shrink: 1;
`;

export const LeaderBoardTopRankingContainer = styled(motion.div)`
  display: flex;
  width: 968px;
  column-gap: 20px;
`;

export const PaginationContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
