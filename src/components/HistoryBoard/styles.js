import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const StyledHistoryBoard = styled(motion.section)`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  width: 912px; // TODO: 하드코딩 -> 전체 의 중앙에 오도록 대책 세우기.
  justify-content: center;
  align-items: center;
`;
