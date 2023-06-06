import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const HeadingText = styled(motion.div)`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
`;
export const SubHeadingText = styled(motion.div)`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
`;
