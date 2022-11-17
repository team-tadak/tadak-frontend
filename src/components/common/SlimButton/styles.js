import styled from "@emotion/styled/macro";

const baseDiv = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
`;

export const StyledSlimButton = styled(baseDiv)`
  padding: 10px;
  width: 100%;
  background: ${({ theme }) => theme.color.primary500};
`;
