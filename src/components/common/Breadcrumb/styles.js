import styled from "@emotion/styled/macro";

export const StyledBreadcrumb = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 10px;

  width: 1280px;
  height: 51px;

  background: #161b21;
  color: #FFFFFF
  border-radius: 10px;
`;

export const BreadcrumbShown = styled.div`
  visibility: ${(props) => (props.status === "shown" ? "visible" : "hidden")};
  display: flex;
`;

export const BreadcrumbColor = styled.div`
  color: ${(props) =>
    props.status === "breadcrumb-not-active"
      ? props.theme.color.white
      : props.theme.color.primary500};
  &:hover {
    text-decoration: underline;
  }
`;

export const Arrow = styled.span`
  margin-left: 5px;
  margin-right: 10px;
`;
