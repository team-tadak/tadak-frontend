import styled from "@emotion/styled/macro";
import { motion } from "framer-motion";

export const StyledLeaderBoardItem = styled(motion.li)`
  padding: 16px;
  padding: ${({ theme, isHeader }) => (isHeader ? "0 16px 16px" : "16px")};
  width: 100%;
  background-color: ${({ theme, isHeader }) => (isHeader ? "transparent" : theme.color.board)};

  border-radius: 10px;

  display: flex;
  align-items: center;
`;

export const RankNumberText = styled.div`
  font-weight: ${({ isHeader }) => (isHeader ? "400" : "700")};
  font-size: ${({ isHeader }) => (isHeader ? "14px" : "20px")};
  color: ${(props) => props.theme.color.white};
  margin-right: 6px;

  width: 50px;
`;

// KPM: Keystrokes Per Minute, 타수
export const KPMText = styled.div`
  font-weight: ${({ isHeader }) => (isHeader ? "400" : "700")};
  font-size: ${({ isHeader }) => (isHeader ? "14px" : "20px")};
  color: ${(props) => props.theme.color.white};

  width: 160px;
`;
