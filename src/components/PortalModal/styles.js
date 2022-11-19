import styled from "@emotion/styled/macro";
import { hexToRgba } from "utils/color";
import { motion } from "framer-motion";

export const StyledModal = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 16px;
  border-radius: 10px;
  padding: 40px 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 400px;
  background: ${({ theme }) => theme.color.modalBG};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const DimmedArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => hexToRgba(theme.color.white, 0.2)};

  z-index: 1000;
`;
