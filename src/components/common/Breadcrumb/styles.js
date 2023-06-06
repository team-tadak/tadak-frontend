import styled from '@emotion/styled';
import { hexToRgba } from 'utils/color';

export const StyledBreadcrumb = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 6px;

  width: 1280px;
  height: 51px;

  background: #161b21;
  color: #ffffff;
  border-radius: 10px;
`;

export const BreadcrumbShown = styled.div`
  visibility: ${(props) => (props.status === 'shown' ? 'visible' : 'hidden')};
  display: flex;
`;

export const BreadcrumbColor = styled.div`
  color: ${(props) =>
    props.status === 'breadcrumb-not-active'
      ? props.theme.color.white
      : props.theme.color.primary500};
  border-radius: 6px;
  &:hover {
    background-color: ${(props) => hexToRgba(props.theme.color.primary500, 0.3)};
  }
`;

export const Arrow = styled.span`
  margin-left: 3px;
  margin-right: 6px;
  &:hover {
    text-decoration: underline;
  }
`;
