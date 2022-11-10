import styled from "@emotion/styled/macro";
import { motion } from "framer-motion";

export const StyledLeaderBoardTopItem = styled(motion.li)`
  width: 100%;
  padding: 16px;
  background: ${({ ranking }) =>
    ranking === "first"
      ? "linear-gradient(263.36deg, #4760fa -2.89%, #161b21 101.57%)"
      : "linear-gradient(263.36deg, #1e2759 -2.89%, #161b21 101.57%)"};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
