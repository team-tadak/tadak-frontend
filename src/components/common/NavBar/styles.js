import styled from "@emotion/styled/macro";

export const StyledNavBar = styled.header`
  padding: 16px 0;
  width: 100%;
  height: 56px;
  background-color: transparent;
`;

export const NavBarContainer = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
`;

export const NavBarLogoContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const NavBarLogoText = styled.h1`
  font-weight: 700;
  font-size: 20px;
`;

export const NavBarMenuContainer = styled.ul`
  display: flex;
  column-gap: 40px;
  align-items: center;
`;

export const NavBarMenuText = styled.li`
  font-weight: 700;
  font-size: 16px;
`;

export const NavBarLogoutContainer = styled.li`
  display: flex;
  align-items: center;
`;
export const NavBarLogoutText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.color.warning300};
  margin-right: 6px;
`;

export const NavBarLogoutIcon = styled.div`
  width: 24px;
  height: 24px;
`;
