import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const TypePageContainer = styled(motion.main)`
  display: flex;
  justify-content: space-between;
  /* column-gap: 36px; */
  /* width: 100%; */
`;

export const TypePageAsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
