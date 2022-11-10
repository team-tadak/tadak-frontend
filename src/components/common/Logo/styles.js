import styled from "@emotion/styled";

export const LogoContainer = styled.img`
  width: ${({ variant }) => (variant === "small" ? "24px" : "48px")};
  height: ${({ variant }) => (variant === "small" ? "24px" : "48px")};
`;
