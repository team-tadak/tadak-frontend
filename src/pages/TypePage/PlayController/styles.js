import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { resetButtonStyle } from "styles/utils/button";

export const StyledPlayController = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  column-gap: 20px;
  width: 100%;
`;

export const PlayContollerButton = styled(motion.button)`
  ${resetButtonStyle}
  border-radius: 10px;

  padding: 10px 0;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme, buttontype }) =>
    buttontype === "warning" ? theme.color.warning300 : theme.color.white};

  &:hover {
    background-color: ${({ theme }) => theme.color.gray};
  }
  &:active {
    background-color: ${({ theme }) => theme.color.grayText};
  }

  transition: 0.2s;
`;
