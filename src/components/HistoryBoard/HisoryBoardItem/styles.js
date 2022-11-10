import styled from "@emotion/styled/macro";
import { motion } from "framer-motion";

export const StyledHistoryBoardItem = styled(motion.li)`
  padding: 16px;
  padding: ${({ theme, isHeader }) => (isHeader ? "0 16px 16px" : "16px")};
  width: 100%;
  background-color: ${({ theme, isHeader }) => (isHeader ? "transparent" : theme.color.board)};

  border-radius: 10px;

  display: flex;
  align-items: center;
`;

// KPM: Keystrokes Per Minute, 타수
export const KPMText = styled.div`
  font-weight: ${({ isHeader }) => (isHeader ? "400" : "700")};
  font-size: ${({ isHeader }) => (isHeader ? "14px" : "20px")};
  color: ${(props) => props.theme.color.white};

  width: 160px;
`;

export const DateText = styled.div`
  font-weight: 400;
  font-size: ${({ isHeader }) => (isHeader ? "14px" : "12px")};
  color: ${(props) => props.theme.color.white};

  width: 180px;
`;
