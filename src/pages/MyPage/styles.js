import styled from "@emotion/styled/macro";
import { motion } from "framer-motion";

export const MyPageContainer = styled(motion.main)`
  display: flex;

  justify-content: space-between;
  margin-top: 32px;
`;

export const MyPageContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
`;
