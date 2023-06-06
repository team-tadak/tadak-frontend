import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledLeaderBoardItem = styled(motion.li)`
  padding: 16px;
  padding: ${({ theme, isheader }) => (isheader ? "0 16px 16px" : "16px")};
  width: 100%;
  background-color: ${({ theme, isheader }) => (isheader ? "transparent" : theme.color.board)};

  border-radius: 10px;

  display: flex;
  align-items: center;
`;

export const RankNumberText = styled.div`
  font-weight: ${({ isheader }) => (isheader ? "400" : "700")};
  font-size: ${({ isheader }) => (isheader ? "14px" : "20px")};
  color: ${(props) => props.theme.color.white};
  margin-right: 6px;

  width: 50px;
`;

// KPM: Keystrokes Per Minute, 타수
export const KPMText = styled.div`
  font-weight: ${({ isheader }) => (isheader ? "400" : "700")};
  font-size: ${({ isheader }) => (isheader ? "14px" : "20px")};
  color: ${(props) => props.theme.color.white};

  width: 160px;
`;
