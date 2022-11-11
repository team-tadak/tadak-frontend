import styled from "@emotion/styled/macro";

export const StyledFooter = styled.footer`
  display: flex;

  padding: 40px 0;
  background-color: ${({ theme }) => theme.color.board};
  width: 100%;
  color: ${({ theme }) => theme.color.grayText};
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 1280px;
`;

export const FooterBrandName = styled.h2`
  font-size: 40px;
  font-weight: 900;
`;

export const FooterContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const FooterContactItemContainer = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const FooterCopyrightContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
`;
