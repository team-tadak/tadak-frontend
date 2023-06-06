import styled from "@emotion/styled";

export const StyledBadge = styled.div`
  display: flex;
  column-gap: 6px;
  align-items: center;
`;

export const BadgeIconContainer = styled.div`
  width: 24px;
  height: 24px;

  /* 아이콘 중앙 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BadgeText = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.color.white};
`;
