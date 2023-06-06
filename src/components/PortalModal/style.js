import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { hexToRgba } from 'utils/color';
import { motion } from 'framer-motion';

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
  background: ${theme.color.modalBG};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ModalIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const ModalText = styled.div`
  color: ${(props) => props.color || theme.color.white};
`;

export const ModalTitle = styled(ModalText)`
  font-size: 40px;
  font-weight: 700;
`;

export const ModalHeader = styled(ModalText)`
  font-size: 36px;
  font-weight: 700;
`;

export const ModalBody = styled(ModalText)`
  font-size: 16px;
`;

export const ModalButton = styled.div`
  padding: 10px;
  width: 100%;
  background-color: #bfcdf0;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #26262d;
  text-align: center;
  font-weight: bold;
  &.active {
    background-color: ${theme.color.primary500};
  }

  &:hover {
    background-color: ${theme.color.primary200};
  }
  transition: 0.3s;
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
