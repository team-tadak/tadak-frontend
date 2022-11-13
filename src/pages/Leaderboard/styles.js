import styled from "@emotion/styled/macro";
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
  width: 100%;
  column-gap: 20px;
`;
