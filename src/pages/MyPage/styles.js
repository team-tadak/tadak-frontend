import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const MyPageContainer = styled(motion.main)`
  display: flex;

  column-gap: 36px;
`;

export const MyPageContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
`;
